    1 double loop - exhaustive search

    2 create a map with a key is an additional number to a current to have a target in a sum
        2.1 two loops, the first for creating the map
        2.2 calculate in one-pass

### example

`[1,5,7], target = 8`

map `[target-current] -> index`

7 -> 0

3 -> 1

1 -> 2

check `current`

**or**

map `[current] -> index`

1 -> 0

5 -> 1

7 -> 2

check `target - current`
