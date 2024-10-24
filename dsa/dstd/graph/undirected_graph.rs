use std::fmt::Display;


#[derive(Debug)]
pub struct G<T: Copy + Display> {
    adjacency_matrix: Vec<Vec<i32>>,
    vertex_data: Vec<Option<T>>,
    size: usize
}

impl<T: Copy + Display> G<T> {
    pub fn new(size: usize) -> Self {
        Self {
            adjacency_matrix: vec![vec![0; size]; size],
            vertex_data: vec![None; size],
            size
        }
    }
    
    pub fn add_vertex(&mut self, position: usize, vertex: T) {
        if position < self.size {
            self.vertex_data[position] = Some(vertex);
        } else {
            panic!("Graph out of bound");
        }
    }

    pub fn add_adjacency_matrix(&mut self, u: usize, v: usize) {
        if u < self.size && v < self.size {
            self.adjacency_matrix[u][v] = 1;
            self.adjacency_matrix[v][u] = 1;
        } else {
            panic!("Graph Out of bound");
        }
    }

    pub fn dfs(&self, start_position: usize) {
        let mut visited = vec![false; self.size];
        self.dfs_utils(start_position, &mut visited);
        println!("\n");
    }

    pub fn dfs_utils(&self, v: usize, visited: &mut Vec<bool>) {
        visited[v] = true;
        let current_vertex = self.vertex_data[v];
        print!("{} ", current_vertex.unwrap());

        for i in 0..self.size {
            if self.adjacency_matrix[v][i] == 1 && !visited[i] {
                self.dfs_utils(i, visited);
            }
        }
    }

    // pub fn bfs(&self, start_node: usize) {

    // }
    
}


