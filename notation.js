const startTime = performance.now()

for (i = 0; i <= 10000; i++) {
    console.log(i)
}

const endTime = performance.now()
console.log(`this took ${endTime - startTime} ms`)