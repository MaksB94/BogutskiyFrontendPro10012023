let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let summ = 0;
let count = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]>0){
        summ+=arr[i];
        count++
    }
}
console.log(summ)
console.log(count)
const minElArray = Math.min.apply(Math, arr);
const indexMinElArray = arr.indexOf(minElArray);
console.log(minElArray);
console.log(indexMinElArray);
const maxElArray = Math.max.apply(Math, arr);
const indexMaxElArray = arr.indexOf(maxElArray);
console.log(maxElArray);
console.log(indexMaxElArray);
let countNegative = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]<0){
        countNegative++
    }
}
console.log(countNegative)
let countEven = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]>0 &&arr[i] % 2 === 1){
        countEven++
    }
}
console.log(countEven)
let countOdd = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]>0 && arr[i] % 2 === 0){
        countOdd++
    }
}
console.log(countOdd)
let summOdd = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]>0 && arr[i] % 2 === 0){
        summOdd+=arr[i]
    }
}
console.log(summOdd)
let summEven = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i]>0 &&arr[i] % 2 === 1){
         summEven+=arr[i]
    }
}
console.log(summEven)
let summMult = 0
for (let i = 0;i<arr.length;i++){
    if(arr[i] > 0){
        summMult*=arr[i]
    }
}
console.log(summMult)
const maxElArray2 = Math.max.apply(Math, arr);
for(var i = 0;i<arr.length;i++){
    if(maxElArray2 !=arr[i]){
        arr[i] = 0;
    }
}
console.log(arr)