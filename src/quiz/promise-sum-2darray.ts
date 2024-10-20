const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum2DArrays(array2D: number[][]): Promise<void> {
    try {
        const rowSumPromises = array2D.map(row => sumRow(row));
        const results = await Promise.all(rowSumPromises);
        const totalSum = results.reduce((acc, curr) => acc + curr, 0);
        console.log('Total sum:', totalSum);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
        let sum = row.reduce((acc, curr) => acc + curr, 0);
        setTimeout(() => resolve(sum), 100);
    });
}

sum2DArray(array2D_1);
