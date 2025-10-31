// const startTime = performance.now();

// for (i = 0; i <= 10000; i++) {
//     console.log(i)
// }

// const endTime = performance.now();
// console.log(`this took ${endTime - startTime} ms`)

const firstArray = []
const secondArray = []

for (i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i)
    }
    secondArray.push(i)
}

console.log("firstarray", firstArray.length);
console.log("secondarray", secondArray.length);

console.time("map1");
const firstUserList = firstArray.map(number => ({ userId: number }))
console.timeEnd("map1");

console.time("map2");
const secondUserList = secondArray.map(number => ({ userId: number }))
console.timeEnd("map2");

console.time("find1");
const firstUser = firstArray.find(user => user.userId === 20000)
console.timeEnd("find1");

console.time("find2");
const secondUser = secondArray.find(user => user.userId === 4000)
console.timeEnd("find2");
