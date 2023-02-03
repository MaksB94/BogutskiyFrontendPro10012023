const array = [1, 2, 3, 4, 5, 6, 7];
  function removeElement(array, item ){
    const arrayFiltered = array.filter(function(el){
       return el != item
    });
   return arrayFiltered
  };
console.log(removeElement(array, 5 ))