const heap = () => {
    const heapData = [];

    const getMin = () => heapData[0];

    const getParentIndex = i => {
        return Math.floor((i - 1) / 2);
    };

    const swapElements = (position1, position2) => {
        const temp = heapData[position1];
        heapData[position1] = heapData[position2];
        heapData[position2] = temp;
    };

    const insert = newElement => {
        heapData.push(newElement);

        let elementIndex = heapData.length - 1;
        let parentIndex = getParentIndex(elementIndex);

        while (
            elementIndex > 0 &&
            heapData[elementIndex] < heapData[parentIndex]
        ) {
            swapElements(parentIndex, elementIndex);

            elementIndex = parentIndex;
            parentIndex = getParentIndex(elementIndex);
        }
    };

    const removeMin = () => {
        const min = getMin();

        heapData[0] = heapData[heapData.length - 1];
        heapData.pop();

        let elementPosition = 0;
        let leftChildPosition = elementPosition * 2 + 1;
        let rightChildPosition = elementPosition * 2 + 2;
        while (leftChildPosition < heapData.length) {
            let minChildPosition = leftChildPosition;
            if (
                rightChildPosition < heapData.length &&
                heapData[rightChildPosition] < heapData[leftChildPosition]
            ) {
                minChildPosition = rightChildPosition;
            }

            if (heapData[elementPosition] <= heapData[minChildPosition]) {
                break;
            } else {
                swapElements(elementPosition, minChildPosition);
                elementPosition = minChildPosition;
                leftChildPosition = elementPosition * 2 + 1;
                rightChildPosition = elementPosition * 2 + 2;
            }
        }

        return min;
    };

    return {
        heapData,
        getMin,
        removeMin,
        insert,
    };
};

const { heapData, getMin, removeMin, insert } = heap();

// for (const elem of [4, 5, 7, 8, 6, 10, 42, 11, 15, 28, 9, 13]) {
//     insert(elem);
// }

// while (heapData.length > 0) {
//     console.log(heapData);
//     console.log(getMin());
//     removeMin();
// }

// for (const elem of [
//     50, 70, 88, 98, 12, 11, 15, 28, 4, 5, 7, 8, 6, 10, 42, 11, 15, 28, 9, 13,
// ]) {
//     insert(elem);
// }

// while (heapData.length > 0) {
//     console.log(heapData);
//     console.log(getMin());
//     removeMin();
// }

for (const elem of [
    99, 6, 81, 52, 58, 23, 4, 3, 90, 7, 12, 69, 20, 42, 31, 34, 68, 61, 41, 55,
    93, 14, 76, 27,
]) {
    insert(elem);
}

while (heapData.length > 0) {
    console.log(heapData);
    console.log(getMin());
    removeMin();
}
