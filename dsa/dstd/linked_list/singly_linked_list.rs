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

    pub fn delete_head(&mut self) -> Option<T> {
        self.head.take().map(|node| {
            if let Some(next) = node.next {
                self.head = Some(next);
                self.length -= 1;
            } else {
                self.head = None
            }
            node.value
        })
    }

    // pub fn delete_tail(&mut self) -> Option<T> {
    //     // If the list is empty, return None
    //     if self.head.is_none() {
    //         return None;
    //     }
    
    //     // If there's only one node in the list
    //     if self.head.as_ref()?.next.is_none() {
    //         let head_node = self.head.take(); // Remove head
    //         self.tail = None; // Update tail to None
    //         self.length -= 1;
    //         return head_node.map(|node| node.value); // Return the value of the removed node
    //     }
    
    //     // More than one node in the list
    //     let mut current = &mut self.head; // Start with the head
    //     let mut prev: Option<*mut Node<T>> = None;
    
    //     // Traverse to the end of the list
    //     while let Some(node) = current {
    //         if node.next.is_none() {
    //             break; // Current is the last node
    //         }
    //         prev = Some(&mut **node); // Keep track of the previous node
    //         current = &mut node.next; // Move to the next node
    //     }
        
    //     // @TODO: Fix me cannot borrow two mutable
    //     // Now `current` is the tail, and `prev` is the second-to-last node
    //     if let Some(last_node) = current {
    //         if let Some(prev_node) = prev {
    //             unsafe {
    //                 (*prev_node).next = None; 
    //             }
    //             self.tail = Some(prev_node as *mut _); // Update tail pointer
    //         }
    //         self.length -= 1; // Decrement the length
    //         return Some(last_node.value); // Return the value of the removed node
    //     }
    
    //     None // Should not reach here
    // }
    

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


