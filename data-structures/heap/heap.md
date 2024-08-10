HEAP (binary tree)

binary tree - each child less or equal than parent

A - elements of heap (multiset)

operations:

-   insert(x) => A && {x}
-   getMin() => min(A)
-   removeMin() => A \ {min{A}}

array representation

-   i -> root/node
-   2 \* i + 1 -> left child
-   2 \* i + 2 -> right child
-   (i - 1) / 2 -> parent

                   2
             /          \
            5             7
          /     \       /   \
         8       6     10   42
        /   \   /  \   /
        11  15  28  9  13

array representation
2 5 7 8 6 10 42 11 15 28 9 13
