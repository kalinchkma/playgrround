use std::fmt::Display;


#[derive(Debug)]
pub struct Node<T> {
   pub value: T,
   pub next: Option<Box<Node<T>>>
}

#[derive(Debug)]
pub struct SinglyLinkedList<T> {
   pub head: Option<Box<Node<T>>>,
   pub tail: Option<*mut Node<T>>,
   pub length: usize
}


impl<T: Copy + Display> SinglyLinkedList<T> {

    pub fn new() -> Self {
        Self {
            head: None,
            tail: None,
            length: 0
        }
    }

    pub fn insert_head(&mut self, value: T) {
        let mut new_node = Box::new(Node {value, next: None});
        
        let ptr: *mut Node<T> = &mut *new_node;

        if self.head.is_none() {
            self.head = Some(new_node);
            self.tail = Some(ptr);
            self.length += 1;
        } else {
            unsafe  {
                (*ptr).next = self.head.take();
            }
            self.head = Some(new_node);
            self.length += 1;
        }

    }

    pub fn insert_tail(&mut self, value: T) {
        let mut new_node = Box::new(Node { value, next: None });

        let mut current = &mut self.head;
        
        while let Some(node) = current  {
            current = &mut node.next;
        }

        self.tail = Some(&mut *new_node);
        *current = Some(new_node);
        self.length += 1;

    }

}

impl<T: Copy + Display> std::fmt::Display for SinglyLinkedList<T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut d = String::new();

        let mut current = &self.head;

        while let Some(node) = current {
            d.push_str(&format!("{}, ", node.value).to_string());
            current = &node.next
        }

        write!(f, "{}", d)
    }
}


