#[allow(unused)]

#[derive(Debug)]
pub struct Node<T> {
   pub value: T,
   pub next: Option<Box<Node<T>>>
}

#[derive(Debug)]
pub struct Queue<T> {
   pub head: Option<Box<Node<T>>>,
   pub tail: Option<*mut Node<T>> 
}

impl<T> Queue<T> {
    pub fn new() -> Self {
        Queue { head: None, tail: None }
    }

    pub fn enqueue(&mut self, value: T) {
       let mut new_node = Box::new(Node {value, next: None});
       
       let raw_node_ptr: *mut Node<T> = &mut *new_node;

       if self.tail.is_none() {
            self.head = Some(new_node);
       } else {
            unsafe {
                (*self.tail.unwrap()).next = Some(new_node);
            }
       }
       self.tail = Some(raw_node_ptr);
    }

    pub fn dequeue(&mut self) -> Option<T> {
        self.head.take().map(|node| {
            if let Some(next) = node.next {
                self.head = Some(next)
            } else {
                self.tail = None
            }
            node.value
        })
    }

    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    }
}