1
const array = ['1', 3, true, 9, NaN, 6, null]
function sum(array){
    let num = 0;
    let i = 0
    array.forEach(el =>  {
        if(typeof el == 'number' && !isNaN(el)){
            num+= el
            i++
        }
    });

      return num/i
}
sum(array)
2
function doZnak(x,znak,y){
    if(znak == '^'){
        znak = '**';
    }
    znak = znak.replace('\'','').replace('\'','')
    return eval(x + znak + y)
}
const plus = doZnak(2,'+',5);
const minus = doZnak(2,'-',5);
const mult = doZnak(2,'*',5);
const div = doZnak(2,'/',5);
const remDiv = doZnak(2,'%',5);
const degree = doZnak(2,'^',5);
3
function createMatrix(main,child){
    const masiv = [];
    for (let i = 0; i < main; i++){
        masiv[i] = [];
        for (let j = 0; j < child; j++){
            masiv[i][j] = 0;
    }}
    return masiv
}
createMatrix(4,4);
4
function replacer(string,array){
    for(let key of array){
       string = string.replaceAll(key,'')
    }
console.log(string)
}
replacer("hello world", ['l', 'd'])