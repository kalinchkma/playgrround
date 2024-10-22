use std::fmt::Display;

#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Option<Box<Node<T>>>
}

#[derive(Debug)]
pub struct Stack<T> {
    head: Option<Box<Node<T>>>,
}


impl<T: Copy + Display> Stack<T> {
    pub fn new() -> Self {
        Self {
            head: None
        }
    }

    pub fn push(&mut self, value: T) {
        if self.head.is_none() {
            self.head = Some(Box::new(Node{ value, next: None }));
        } else {
            self.head = Some(Box::new(Node { value, next: self.head.take() }));
        }
    }

    pub fn pop(&mut self) -> Option<T> {
       self.head.take().map(|node| {
            if let Some(next) = node.next {
                self.head = Some(next);
            } else {
                self.head = None
            }
            node.value
       })
    }

    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    } 
}


