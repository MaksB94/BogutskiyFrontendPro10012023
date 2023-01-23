1
let result = '';
for (let i = 20; i < 31; i++) {
    let n = i + 0.5;
     result += i+' ' + n+' '
    if(i==30){
      result += i+' '
    }
}
console.log(result)
2
let usd = 27;
for (let i = 1; i < 11; i++) {
    console.log(usd*i*10)  
}
3
let num = 500;
for (let i = 1; i <= num; i++) {
    if(i*i<=num){
       console.log(i)
    }
}
4
let num = 11;
let prime = true;
    for(let i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
   console.log(prime)
5
let num = 9;
for(let i=2; i<num; i++) {
  if(Math.pow(3, i)   == num){
    console.log(i)
  }
}