package main

type BSTNode[T interface{}] struct {
	NodeId int
	Data   T
	Left   *BSTNode[T]
	Right  *BSTNode[T]
}

func (bst *BSTNode[T]) Insert(data T, id int) {

	if bst.NodeId == 0 {
		bst.Data = data
		bst.NodeId = id
		bst.Left = nil
		bst.Right = nil
	}

	if id < bst.NodeId {
		// Insert into the left subtree
		if bst.Left == nil {
			bst.Left = &BSTNode[T]{Data: data, NodeId: id, Left: nil, Right: nil}
		} else {
			bst.Left.Insert(data, id)
		}
	} else if id > bst.NodeId {
		// Insert into the right subtree
		if bst.Right == nil {
			bst.Right = &BSTNode[T]{Data: data, NodeId: id, Left: nil, Right: nil}
		} else {
			bst.Right.Insert(data, id)
		}
	}
}
