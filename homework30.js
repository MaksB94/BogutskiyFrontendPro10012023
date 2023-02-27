class SuperMath {
    check(obj) {
      const {
        X,
        Y,
        znak
      } = obj;
      if (!this.isValidOperator(znak)) {
        console.log('Некоректна математична операція');
        return;
      }
      
      const confirmMessage = `Ви бажаєте виконати дію ${X} ${znak} ${Y}? (так/ні)`;
      const confirmed = confirm(confirmMessage);

      if (confirmed) {
        console.log(`Результат: ${this.calculate(X, Y, znak)}`);
      } else {
        this.input();
      }
    }

    input() {
      const X = +prompt('Введіть число X:');
      const Y = +prompt('Введіть число Y:');
      const znak = prompt('Введіть математичну операцію (+, -, *, /, %):');
      const obj = {
        X,
        Y,
        znak
      };
      this.check(obj);
    }

    isValidOperator(operator) {
      return ['+', '-', '*', '/', '%'].includes(operator);
    }

    calculate(X, Y, znak) {
      switch (znak) {
        case '+':
          return X + Y;
        case '-':
          return X - Y;
        case '*':
          return X * Y;
        case '/':
          return X / Y;
        case '%':
          return X % Y;
      }
    }
  }

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);