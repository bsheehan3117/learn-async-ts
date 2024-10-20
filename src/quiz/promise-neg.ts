const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkNegatives(row: number[], rowIndex: number): Promise<number[]> {
    return new Promise((resolve, reject) => {
        if (row.some(value => value < 0)) {
            resolve(row);
        } else {
            reject(`Row ${rowIndex} has no negatives`);
        }
    });
}

const negativeCheckPromises = array2D_3.map((row, index) => checkNegatives(row, index));
Promise.any(negativeCheckPromises)
    .then(result => {
        console.log('Row w negatives:', result);
    })
    .catch(error => {
        console.error('No row w negatives:', error);
    });
