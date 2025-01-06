package interfaces

type Node interface {
	Display() string
}

type NodeTree interface {
	Node // interface composition in GO!
	Components() []NodeTree
}
