use std::fmt::Display;

#[derive(Debug)]
pub struct Node<T> {
    value: T,
    next: Option<Box<Node<T>>>
}

#[derive(Debug)]
pub struct Stack<T> {
    head: Option<Box<Node<T>>>,
    length: usize
}

impl<T: Copy + Display> Stack<T> {
    pub fn new() -> Self {
        Self {
            head: None,
            length: 0
        }
    }

    pub fn push(&mut self, value: T) {
        if self.head.is_none() {
            self.head = Some(Box::new(Node{ value, next: None }));
        } else {
            self.head = Some(Box::new(Node { value, next: self.head.take() }));
        }
        self.length += 1;
    }

    pub fn pop(&mut self) -> Option<T> {
       self.head.take().map(|node| {
            if let Some(next) = node.next {
                self.length -= 1;
                self.head = Some(next);
            } else {
                self.length -= 1;
                self.head = None
            }
            node.value
       })
    }

    pub fn is_empty(&self) -> bool {
        self.head.is_none()
    } 
}


#[cfg(test)]
mod test {
    use super::Stack;

    #[test]
    fn test_push_method() {
        let mut s: Stack<i32> = Stack::new();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);

        assert_eq!(s.length, 4);
    }

    #[test]
    fn test_pop_method() {
        let mut s: Stack<i32> = Stack::new();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);

        s.pop();
        assert_eq!(s.length, 3);
        s.pop();
        s.pop();
        s.pop();
        assert_eq!(s.length, 0);
        s.pop();
        assert_eq!(s.length, 0)
    }
}

