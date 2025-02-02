## Memory Management in go

- Go usage GC to manage memory
- Go GC is based on **Tricolor mark-and-sweep Algorithms**
- Go GC is concurrent

## Memory Layout of a go programe

![program_memory](./program_memory.png)



## Stack vs Heap

Whey does it matter?

- Dose not matter for the correctness of your program.
- DOES affect the performance of your program.
- Anything on the heap is managed by the Garbage collector
- The GC is very good, but it causes latency
    - For the whole program, not just the part creating garbage 

**Sharing up typically escapes to the heap**
**Sharing down typically stays on the stack**
**Go only puts function variables on the stack if it can prove a variable is not used after the fucation returns**

When are values constructed on the heap?

- When a value could possibly be referenced after the function that constructed the value returns.
- When the compiler determines a value is too large to fit on the stack
- When the compiler doesn't know the size of a value at compile time

Commonly heap allocated values

- Values shared with Pointers
- Variables stored in interface variables
- Func literal variables
    - Variables captured by a closure
- Backing data for Maps, Channels, Slices, and Strings