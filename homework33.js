1
function* randomNumbers(start, end) {
    for (let i = 0; i < 10; i++) {
      yield Math.floor(Math.random() * (end - start + 1) + start);
    }
  }
  const generator = randomNumbers(1, 100);
  for (let num of generator) {
    console.log(num);
  }


  2
  function brushTeeth() {
    return new Promise((resolve, reject) => {
      console.log("Душ");
      setTimeout(() => {
        console.log("Готово!");
        resolve();
      }, 2000);
    });
  }
  
  function takeShower() {
    return new Promise((resolve, reject) => {
      console.log("Завтрак");
      setTimeout(() => {
        console.log("Готово!");
        resolve();
      }, 5000);
    });
  }
  
  function makeBreakfast() {
    return new Promise((resolve, reject) => {
      console.log("Чистка зубов");
      setTimeout(() => {
        console.log("Готово!");
        resolve();
      }, 10000);
    });
  }
  
  async function startMyDay() {
    console.log("Начало дня");
    await brushTeeth();
    await takeShower();
    await makeBreakfast();
    console.log("Конец дня");
  }
  
  startMyDay();
  