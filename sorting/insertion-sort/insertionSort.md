# Insertion sorting

There is no an insertion, just swaps (find a min and insert in a current position - selection sort)

`array - 0...n-1`

invariant - position in array - p
all the elements in the left of p have sorted

save invariant - swap the current element and the left neighbor until left element is bigger then current

Best time - O(n) (sorted array)

Worst time - O(n^2) (reversed sorted array, to sort in ascending order source array sorted in descending order and vice versa)

### Invariant examle

current sorting element - 6

<span style="color:green">1 4 8 9</span>
<span style="color:orange">6</span>
<span style="color:red">3 5 7</span>

<span style="color:green">1 4 8</span>
<span style="color:orange">6 9</span>
<span style="color:red">3 5 7</span>

<span style="color:green">1 4 6 8 9</span>
<span style="color:red">3 5 7</span>
