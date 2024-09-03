const split = (data, left, right) => {
    const pivot = data[right];

    let middlePoint = left - 1
    for (let i = left; i < right; i++) {
        if (data[i] < pivot) {
            middlePoint++
            [data[middlePoint], data[i]] = [data[i], data[middlePoint]]
        }
    }
    [data[middlePoint+1], data[right]] = [data[right], data[middlePoint+1]]

    return middlePoint + 1
};

const quickSoftAsc = (data, left, right) => {
    if (left < right) {
        const middlePoint = split(data, left, right)
        quickSoftAsc(data, left, middlePoint - 1)
        // middle point is in the final proper position
        quickSoftAsc(data, middlePoint + 1, right)
    }
};

const quickSort = (d) => quickSoftAsc(d, 0, d.length - 1);

const d = [50, 5, 7, 98, 4, 2, 5, 7, 9];
quickSort(d);
console.log(d);
