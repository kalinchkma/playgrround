use std::fmt::Display;


#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Option<Box<Node<T>>>
}

pub struct SinglyLinkedList<T> {
    head: Option<Box<Node<T>>>,
    tail: Option<*mut Node<T>>,
    length: usize
}


impl<T: Copy + Display> SinglyLinkedList<T> {
    pub fn new() -> Self {
        Self {
            head: None,
            tail: None,
            length: 0
        }
    }

    pub fn push(&mut self, value: T) {
        let mut new_node = Box::new(Node { value, next: None });

        let raw_pointer: *mut Node<T> = &mut *new_node;

        if self.head.is_none() {
            self.head = Some(new_node)
        } else {
            unsafe {
                (*self.tail.unwrap()).next = Some(new_node)
            }
        }

        self.length += 1;
        self.tail = Some(raw_pointer)
    }

    // pub fn pop(&mut self) -> Option<T> {
        
    // }

}




