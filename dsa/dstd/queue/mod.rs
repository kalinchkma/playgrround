
#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Option<Box<Node<T>>>
}

pub struct Queue<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<*mut Node<T>> 
}

impl<T> Queue<T> {
    pub fn new() -> Self {
        Queue { head: None, tail: None }
    }

    pub fn enqueue(&mut self, value: T) {
        let new_node = Box::new(Node {value, next: None});
    }
}