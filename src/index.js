module.exports = function check(str, bracketsConfig) {
  // your solution

  let slash = '|';

  let closeBrackets = [];
  let openBrackets = [];
  let rowBrackets = [];
  let stack = [];

  if (str.length % 2 !== 0) {// если в строке Нечетное количество символов
    return false;

  } else {
    for (let elem of bracketsConfig) {
      if (elem[0] === elem[1]) {
        // добавляем в массив только одинаковые скобки
        rowBrackets.push(elem[0]);
      } else {
        //  пушим в массив закрытых скобок
        closeBrackets.push(elem[1]);
        // пушим в массив открытых скобок
        openBrackets.push(elem[0]);
      }
    }
    console.log(closeBrackets);
    console.log(openBrackets)

    for (let i = 0; i < str.length; i++) {

      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
        // попытка поиска слэша
        // if (stack.includes(slash)) {
        //   // console.log(stack);
        //   let count = 0;

        //   for (let k = 0; k < str.length; k++) {
        //     slash *= slash;
        //     // count++;
        //     if (count % 2 === 0) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   }
        // }


        // проверяем одинаковую скобку в массиве
      } else if (rowBrackets.includes(currentSymbol)) {

        if (currentSymbol === topElement) { // если в stack тоже одинаковая скобка
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }

      } else {
        if (openBrackets[closeBrackets.indexOf(currentSymbol)] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;

}
