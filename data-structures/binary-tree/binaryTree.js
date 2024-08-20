const binaryTree = () => {
    let tree = null;

    const insertInternal = (value, node) => {
        if (node === null) {
            return { value, left: null, right: null };
        }

        if (value < node.value) {
            node.left = insertInternal(value, node.left);
        } else if (value >= node.value) {
            node.right = insertInternal(value, node.right);
        }

        return node;
    };

    const insert = value => {
        tree = insertInternal(value, tree);
    };

    const contain = (value, node = tree) => {
        if (node === null) return false;
        if (value === node.value) return true;
        if (value < node.value) return contain(value, node.left);
        if (value > node.value) return contain(value, node.right);
    };

    return {
        insert,
        contain,
    };
};

const { insert, contain } = binaryTree();

for (const elem of [
    99, 6, 81, 52, 58, 23, 4, 3, 90, 7, 12, 69, 20, 42, 31, 34, 68, 61, 41, 55,
    4, 3, 7, 93, 14, 76, 27,
]) {
    insert(elem);
}

console.log(contain(3));
console.log(contain(4));
console.log(contain(93));
console.log(contain(2));
