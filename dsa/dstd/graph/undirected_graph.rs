
pub struct G<T: Copy> {
    adjacency_matrix: Vec<Vec<T>>
}

impl<T: Copy> G<T> {
    pub fn new() -> Self {
        Self {
            adjacency_matrix: Vec::new()
        }
    }
    pub fn add_vertex(&mut self, vertex: Vec<T>) {
        self.adjacency_matrix.push(vertex);
    }
}



#[cfg(test)]
mod test {
    use super::G;

    #[test]
    fn test_add_vertex() {
        let matrix_graph: G<i32> = G::new();
        assert_eq!(matrix_graph.adjacency_matrix, vec![[1, 2, 3]])
    }
}

