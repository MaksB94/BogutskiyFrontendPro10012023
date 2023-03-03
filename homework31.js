1
const numbersArray = [1,1,2,3,4,5,5,5,6];
const uniq = [...new Set(numbersArray)];
console.log(uniq)
2
const userBob = { name: 'Bob' };
const userJane = { name: 'Jane'};

const greetMap = new Map([
  [userBob, "Hello Bob nice to see you"],
  [userJane, "How your kids doing Jane?"]
]);

function greetUser(user) {
  return greetMap.get(user);
}

console.log(greetUser(userBob)); 
console.log(greetUser(userJane));

3
function mapToObject(map) {
  const obj = {};
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

function objectToMap(obj) {
  const map = new Map();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      map.set(key, obj[key]);
    }
  }
  return map;
}

const myMap = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3]
]);

const myObject = {
  four: 4,
  five: 5,
  six: 6
};

const mappedObject = objectToMap(myObject);
console.log(mappedObject); 
const mappedMap = mapToObject(myMap);
console.log(mappedMap); 