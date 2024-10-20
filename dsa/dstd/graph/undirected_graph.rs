
pub struct G<T: Copy> {
    adjacency_matrix: Vec<Vec<T>>
}

impl<T: Copy> G<T> {
    pub fn add_vertex(&mut self, vertex: Vec<T>) {

    }
}

pub fn adjacency_list() {
    println!("test");
}

#[cfg(test)]
mod test {

    #[test]
    fn test_index() {
        let v = vec![1, 2, 3, 4, 5, 6, 7];

        assert_eq!(2, v[1]);

    }
}

