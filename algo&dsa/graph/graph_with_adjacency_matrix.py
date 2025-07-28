def add_edge(mat, i, j):
    mat[i][j] = 1
    mat[j][i] = 1

def display_matrix(mat):
    for row in mat:
        print(" ".join(map(str, row)))

def main():
    vertex = 4
    matrix = [[0] * vertex for _ in range(vertex)]

    print(matrix)
    display_matrix(matrix)
    add_edge(matrix, 0, 3)
    add_edge(matrix, 0, 2)
    add_edge(matrix, 0, 1)
    add_edge(matrix, 1, 3)
    print("==========")
    display_matrix(matrix)


if __name__ == "__main__":
    main()