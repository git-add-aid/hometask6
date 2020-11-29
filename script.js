// Привет. Вам нужно создать объект, который описывает цилиндр. У него должны быть свойства - радиус и высота,
//  И еще у него должно быть 2 метода, получение объема и площади поверхности.
// v = pi*r^2 * h;
// s = 2*pi *R*(h + R)

var cylinder = {
  radius: +prompt('enter radius of cylinder'),
  height: +prompt('enter height of cylinder'),
  volume() {
    var sum = (Math.PI * (this.radius ** 2)) * this.height;
    alert('Обьем цилиндра : ' + sum);
    return sum;
  },
  square () {
    var sum = 2 * Math.PI * this.radius * (this.height + this.radius);
    alert ('Площадь поверхности цилиндра : '+ sum);
    return sum;
    
  }
};
// console.log('Обьем цилиндра : ' + cylinder.volume())
console.log('Площадь поверхности цилиндра : ' + cylinder.square())





// Кроме этого, реализуйте функцию getResult. Функция принимает 1 и 2 параметров - числа, а 3 параметр - математический знак и возвращает результат.
//  Например - getResult(5,6,'+') - 11, а getResult(5,6,'*') - 30.


 function getResult(a, b, symbol) {

   switch (symbol) {
    case '+' :
      getResult = a + b;
      return getResult;
    case '-' :
      getResult = a - b;
      return getResult;
    case '*' :
      getResult = a * b;
      return getResult;
    case '/' :
      getResult = a / b;
      return getResult;
    case '**' :
      getResult = a ** b;
      return getResult;
    case '%' :
      getResult = a % b;
      return getResult;
   }
 }

console.log(getResult(5,1, '/'));


// Ну и бонусы)) Написать функцию isCharPresent. Она принимает 2 аргумента - строку и символ и узнает содержится ли символ в строке, возражает true / false
// Написать вункцию charIndexOf. Принимает такие же аргументы, как первая функция, но возвращает индекс или -1, если символа нет.
// Как вы понимаете, пользоваться методами includes и indexOf - нельзя)


// Написать функцию isCharPresent. Она принимает 2 аргумента - строку и символ и узнает содержится ли символ в строке, возражает true / false

function isCharPresent (inputString, symbol) {
  for (var i = 0; i < inputString.length; i++) 
    if (inputString.charAt(i) === symbol) {
      return true;}
    return false;
}


console.log(isCharPresent('serg ey', ' '));



// Написать вункцию charIndexOf. Принимает такие же аргументы, как первая функция, но возвращает индекс или -1, если символа нет.

function charIndexOf (inputString, symbol) {
  for (var i = 0; i < inputString.length; i++) 
    if (inputString.charAt(i) === symbol) {
      return inputString.charAt(i);}
    return '-1';
}


console.log(charIndexOf('taras', 'T'))