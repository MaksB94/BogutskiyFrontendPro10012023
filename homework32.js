const wakeUp = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Просыпаемся");
        resolve();
      }, 1000);
    });
  };
  
  const eatBreakfast = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Завтракаем");
        resolve();
      }, 500);
    });
  };
  
  const startWork = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Начинаем работу");
        resolve();
      }, 2000);
    });
  };
  
  wakeUp()
    .then(eatBreakfast)
    .then(startWork)
    .catch((error) => {
      console.error(error);
    });
  