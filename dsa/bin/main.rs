use dstd::graph::undirected_graph::G;
// use dstd::queue::Queue;
// use dstd::stack::Stack;
// use dstd::linked_list::singly_linked_list::SinglyLinkedList;



fn main() {
    let mut matrix_graph: G<&str> = G::new(5);
        
    matrix_graph.add_vertex(0, "A");
    matrix_graph.add_vertex(1, "B");
    matrix_graph.add_vertex(2, "C");
    matrix_graph.add_vertex(3, "D");    
    matrix_graph.add_vertex(4, "E");    
    // println!("{:?}", matrix_graph);
    matrix_graph.add_adjacency_matrix(0, 1);
    matrix_graph.add_adjacency_matrix(0, 2);
    matrix_graph.add_adjacency_matrix(1, 3);
    matrix_graph.add_adjacency_matrix(2, 1);
    matrix_graph.add_adjacency_matrix(3, 4);
    // println!("{:?}", matrix_graph);

    matrix_graph.dfs(0);
    matrix_graph.dfs(1);
    matrix_graph.dfs(2);
    matrix_graph.dfs(3);

    // matrix_graph.dfs_treversal(1);
    // let mut q: Queue<i32> = Queue::new();

    // q.enqueue(1);
    // q.enqueue(2);
    // q.enqueue(3);
    // q.enqueue(4);
    // q.enqueue(5);

    // println!("{:#?}", q);
    // println!("After dequeue =>>>");
    // q.dequeue();
    // q.dequeue();
    // q.dequeue();
    // println!("{:#?}", q);

    // let mut stack: Stack<i32> = Stack::new();

    // stack.push(1);
    // stack.push(2);
    // stack.push(3);
    // stack.push(4);
    // stack.push(5);
    // stack.push(6);

    // println!("{:#?}", stack);
    // stack.pop();
    // stack.pop();
    // stack.pop();
    // stack.pop();
    // stack.pop();
    // println!("{:#?}", stack);
    // stack.pop();
    // println!("{:#?}", stack);
    // stack.pop();
    // println!("{:#?}", stack);

    // println!("{}", std::mem::size_of::<usize>())

    // let mut s_list: SinglyLinkedList<i32> = SinglyLinkedList::new();

    // s_list.insert_head(1);
    // s_list.insert_head(2);
    // s_list.insert_head(3);

    // println!("{}", s_list);
    // s_list.insert_tail(100);
    // println!("{}", s_list);
    // s_list.insert_tail(98);
    // println!("{}", s_list);
    // s_list.insert_head(77);
    // println!("{}", s_list);
    // s_list.delete_head();
    // println!("{}", s_list);

    // graph representation
    
}
