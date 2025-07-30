class AdjNode:
    def __init__(self, data):
        self.vertex = data
        self.next = None

class AdjList:

    def __init__(self, vertices):
        self.v = vertices
        self.graph = [None] * self.v

    def addEdge(self, source, destination):
        node = AdjNode(destination)
        node.next = self.graph[source]
        self.graph[source] = node

    def addVertex(self, vk, source, destination):
        self.addEdge(source, vk)
        self.addEdge(vk, destination)
    
    def print_graph(self):
        for i in range(self.v):
            print(i, end=" ")
            temp = self.graph[i]
            while temp:
                print("->", temp.vertex, end=" ")
                temp = temp.next
            print("\n")

if __name__ == "__main__":
    v = 6
    graph = AdjList(v)
    graph.addEdge(0, 1)
    graph.addEdge(0, 3)
    graph.addEdge(0, 4)
    graph.addEdge(1, 2)
    graph.addEdge(3, 2)
    graph.addEdge(4, 3)

    graph.print_graph()

    graph.addVertex(5, 3, 2)
    print("After adding new vertex---------")
    graph.print_graph()
    