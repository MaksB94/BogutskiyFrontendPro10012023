function generateList(array) {

    const list = document.createElement("ul");
    
    array.forEach(function(item) {
      const listItem = document.createElement("li");
      
      if (Array.isArray(item)) {
        listItem.appendChild(generateList(item));
      } else {
        listItem.appendChild(document.createTextNode(item));
      }
      list.appendChild(listItem);
    });
    return list;
  }
  