use dstd::graph::undirected_graph::G;



fn main() {
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
