1
let str = ''
for (let i = 10; i < 21; i++) {
  if(i<20){
    str +=  i +','
  } else{
    str += i
  }
}
console.log(str)

2
let result = 0;
for (let i = 10; i < 21; i++) {
result = i * i
console.log(result)
}

3
let result = 0;
for (let i = 1; i < 11; i++) {
result = i * 7
console.log(result)
}
4
let result = 0;
for (let i = 1; i < 16; i++) {
result += i 
}
console.log(result)
5
let result = 1;
for (let i = 15; i < 36; i++) {
result *= i 
console.log(result)
}
6
let result = 0;
for (let i = 0; i < 501; i++) {
result += i 
}
console.log(result/500)
7
let result = 0;
for (let i = 30; i < 81; i++) {
  if(i%2 == 0){
result += i
} 
}
console.log(result)
8
for (let i = 100; i < 201; i++) {
  if(i%3 == 0){
    console.log(i)
} 
}
9
let integer = 50;
for (let i = 2; i < integer; i++) {
  if(integer%i == 0){
    console.log(i)
} 
}
10
let integer = 50;
for (let i = 2; i < integer; i++) {
  if(integer%i == 0){
   if(i%2 == 0){
    console.log(i)
   }
} 
}
11
let integer = 50;
let result = 0
for (let i = 2; i < integer; i++) {
  if(integer%i == 0){
   if(i%2 == 0){
    result+=i
   }
} 
}
console.log(result)
12
for (let i = 1; i < 11; i++){
  for (let j = 1; j < 11; j++){
console.log(i*j)
  }
}

