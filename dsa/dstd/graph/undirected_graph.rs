use std::fmt::Display;



pub struct G<T: Copy + Display> {
    adjacency_matrix: Vec<Vec<i8>>,
    vertex_data: Vec<T>
}

impl<T: Copy + Display> G<T> {
    pub fn new() -> Self {
        Self {
            adjacency_matrix: Vec::new(),
            vertex_data: Vec::new()
        }
    }
    pub fn add_vertex(&mut self, vertex_connection: Vec<i8>, vertex: T) {
        self.adjacency_matrix.push(vertex_connection);
        self.vertex_data.push(vertex);
    }

    pub fn dfs_utils(&self, v: usize, visited: &mut Vec<bool>) {
        visited[v] = true;
        let current_vertex = self.vertex_data[v];
        print!("Vertex data: {}", current_vertex);

        for i in 0..self.vertex_data.len() {
            if self.adjacency_matrix[v][i] == 1 && !visited[v] {
                self.dfs_utils(i, visited);
            }
        }
    }

    pub fn dfs_treversal(&self, start_node: usize) {
       let mut visited = vec![false; self.vertex_data.len()];
       self.dfs_utils(start_node, &mut visited);
       println!("")
    }
}


#[cfg(test)]
mod test {
    use super::G;

    #[test]
    fn test_add_vertex() {
        let mut matrix_graph = G::new();
        
        matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "A");
        matrix_graph.add_vertex(vec![1, 0, 1, 0, 1, 0, 1], "B");
        matrix_graph.add_vertex(vec![0, 1, 0, 0, 0, 1, 1], "C");
        matrix_graph.add_vertex(vec![0, 0, 0, 0, 1, 1, 0], "D");
        matrix_graph.add_vertex(vec![0, 1, 0, 1, 0, 0, 0], "E");
        matrix_graph.add_vertex(vec![0, 0, 1, 1, 0, 0, 0], "F");
        matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "G");

        let adjacency_matrix = vec![[0, 1, 1, 0, 0, 0, 0],
                                                [1, 0, 1, 0, 1, 0, 1],
                                                [0, 1, 0, 0, 0, 1, 1],
                                                [0, 0, 0, 0, 1, 1, 0],
                                                [0, 1, 0, 1, 0, 0, 0],
                                                [0, 0, 1, 1, 0, 0, 0],
                                                [0, 1, 1, 0, 0, 0, 0]];
        let vertices = vec!["A", "B", "C", "D", "E", "F", "G"];

        assert_eq!(matrix_graph.adjacency_matrix, adjacency_matrix);
        assert_eq!(matrix_graph.vertex_data, vertices);
    }

    #[test]
    fn treaverse_gaph() {
        let mut matrix_graph: G<&str> = G::new();
        
        matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "A");
        matrix_graph.add_vertex(vec![1, 0, 1, 0, 1, 0, 1], "B");
        matrix_graph.add_vertex(vec![0, 1, 0, 0, 0, 1, 1], "C");
        matrix_graph.add_vertex(vec![0, 0, 0, 0, 1, 1, 0], "D");
        matrix_graph.add_vertex(vec![0, 1, 0, 1, 0, 0, 0], "E");
        matrix_graph.add_vertex(vec![0, 0, 1, 1, 0, 0, 0], "F");
        matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "G");

        matrix_graph.dfs_treversal(1);
    }
}

