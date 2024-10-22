// use dstd::graph::undirected_graph::G;
// use dstd::queue::Queue;
use dstd::stack::Stack;


fn main() {
    // let mut matrix_graph: G<&str> = G::new();
        
    // matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "A");
    // matrix_graph.add_vertex(vec![1, 0, 1, 0, 1, 0, 1], "B");
    // matrix_graph.add_vertex(vec![0, 1, 0, 0, 0, 1, 1], "C");
    // matrix_graph.add_vertex(vec![0, 0, 0, 0, 1, 1, 0], "D");
    // matrix_graph.add_vertex(vec![0, 1, 0, 1, 0, 0, 0], "E");
    // matrix_graph.add_vertex(vec![0, 0, 1, 1, 0, 0, 0], "F");
    // matrix_graph.add_vertex(vec![0, 1, 1, 0, 0, 0, 0], "G");

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

    let mut stack: Stack<i32> = Stack::new();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    println!("{:#?}", stack);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    println!("{:#?}", stack);
    stack.pop();
    println!("{:#?}", stack);
    stack.pop();
    println!("{:#?}", stack);

    println!("{}", std::mem::size_of::<usize>())
}
