def add_edge(adj, i, j):
    adj[i].append(j)
    adj[j].append(i)

def display_adj_list(adj):
    for i in range(len(adj)):
        print(f"{i}: ", end="")
        for j in adj[i]:
            print(f"{j}", end=" ")
        print()

def main():
    vertex = 4
    adj_list = [[] for _ in range(vertex)]

    add_edge(adj_list, 1, 2)
    add_edge(adj_list, 2, 3)
    add_edge(adj_list, 0, 3)

    display_adj_list(adj_list)

if __name__ == "__main__":
    main()
