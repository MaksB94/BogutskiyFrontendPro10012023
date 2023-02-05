function sum(num) {
    let sum1 = 0
   return function(num){
    return sum1 += num
   }
}
let count = sum()
count(3)
count(5)
count(20)
