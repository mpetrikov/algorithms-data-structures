package main

import "fmt"

type IntBinaryTree struct {
	val   int
	left  *IntBinaryTree
	right *IntBinaryTree
}

func (bt *IntBinaryTree) Insert(value int) *IntBinaryTree {
	if bt == nil {
		return &IntBinaryTree{val: value}
	}

	if value < bt.val {
		bt.left = bt.left.Insert(value)
	} else if value >= bt.val {
		bt.right = bt.right.Insert(value)
	}

	return bt
}

func (bt *IntBinaryTree) Contains(value int) bool {
	switch {
	case bt == nil:
		return false
	case value < bt.val:
		return bt.left.Contains(value)
	case value > bt.val:
		return bt.right.Contains(value)
	default:
		return true
	}
}

func main() {
	var bt *IntBinaryTree
	bt = bt.Insert(5)
	bt = bt.Insert(3)
	bt = bt.Insert(10)
	bt = bt.Insert(2)

	fmt.Println(bt.Contains(2))
	fmt.Println(bt.Contains(3))
	fmt.Println(bt.Contains(11))
	fmt.Println(bt.Contains(10))
}
