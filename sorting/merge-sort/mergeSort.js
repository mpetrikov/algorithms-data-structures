const merge = (a, b) => {
    const result = new Array(a.length + b.length);
    let i = 0;
    let j = 0;

    while (i < a.length || j < b.length) {
        if (j == b.length || (i < a.length && a[i] < b[j])) {
            result[i + j] = a[i];
            i++;
        } else {
            result[i + j] = b[j];
            j++;
        }
    }

    return result;
};

const mergeSoftAsc = data => {
    if (data.length <= 1) return data;

    const middleOfData = Math.round(data.length / 2);

    const leftData = data.slice(0, middleOfData);
    const rightData = data.slice(middleOfData, data.length);
    console.log(leftData, rightData);

    const leftSortedData = mergeSoftAsc(leftData);
    const rightSortedData = mergeSoftAsc(rightData);

    return merge(leftSortedData, rightSortedData);
};

const d = [50, 5, 7, 98, 4, 2, 5, 7, 9];
const resultAsc = mergeSoftAsc(d);
console.log(resultAsc);
