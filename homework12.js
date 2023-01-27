let arr = prompt('Введите строку без пробелов')
arr = arr.split('').sort();
console.log(arr);
arr.splice(1,3);
console.log(arr);
