const heapSoftAsc = data => {
    // use heap from data-structures/heap/heap.js
    const { heapData, getMin, removeMin, insert } = heap();

    for (const item of data) {
        insert(item);
    }

    const result = [];
    let minElement = getMin();
    while (minElement !== null) {
        result.push(minElement);
        removeMin();
        minElement = getMin();
    } 

    return result;
};

const d = [50, 5, 7, 98, 4, 2, 5, 7, 9];
const resultAsc = heapSoftAsc(d);
console.log(resultAsc);
