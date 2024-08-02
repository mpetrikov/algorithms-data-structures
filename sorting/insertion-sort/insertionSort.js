const insertionSoftAsc = data => {
    const sortedData = [...data];

    for (let i = 0; i < sortedData.length; i++) {
        let currentPosition = i;

        while (currentPosition > 0 && sortedData[currentPosition - 1] > sortedData[currentPosition]) {
            [sortedData[currentPosition - 1], sortedData[currentPosition]] = [
                sortedData[currentPosition],
                sortedData[currentPosition - 1],
            ];
            currentPosition--;
        }
    }

    return sortedData;
};

const d = [50, 5, 7, 98, 4, 2, 5, 7, 9];
const resultAsc = insertionSoftAsc(d);
console.log(resultAsc);
