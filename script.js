document.addEventListener("DOMContentLoaded", function() {
   const one = document.querySelector(".one");
   const two = document.querySelector(".two");
   const three = document.querySelector(".three");
   const four = document.querySelector(".four");
   const five = document.querySelector(".five");
   const six = document.querySelector(".six");
   const seven = document.querySelector(".seven");
   const eight = document.querySelector(".eight");
   const nine = document.querySelector(".nine");
   const zero = document.querySelector(".zero");
   const plus = document.querySelector(".plus");
   const minus= document.querySelector(".minus");
   const times = document.querySelector(".times");
   const divide = document.querySelector(".divide");
   const enter = document.querySelector(".enter");
   const clear = document.querySelector(".clear");
   const display = document.querySelector(".display");

   let num1 = null;
   let num2 = null;
   let operator = null;
   let total = null;
   let current_num = "";
   display.textContent = "0";


   one.addEventListener("click", () => {
      current_num += '1';
      display.textContent = current_num;
   });
   two.addEventListener("click", () => {
      current_num += '2';
      display.textContent = current_num;
   });
   three.addEventListener("click", () => {
      current_num += '3';
      display.textContent = current_num;
   });
   four.addEventListener("click", () => {
      current_num += '4';
      display.textContent = current_num;
   });
   five.addEventListener("click", () => {
      current_num += '5';
      display.textContent = current_num;
   });
   six.addEventListener("click", () => {
      current_num += '6';
      display.textContent = current_num;
   });
   seven.addEventListener("click", () => {
      current_num += '7';
      display.textContent = current_num;
   });
   eight.addEventListener("click", () => {
      current_num += '8';
      display.textContent = current_num;
   });
   nine.addEventListener("click", () => {
      current_num += '9';
      display.textContent = current_num;
   });
   zero.addEventListener("click", () => {
      current_num += '0';
      display.textContent = current_num;
   });


   plus.addEventListener("click", () => {
      if (operator === null) {
         operator = "+";
         operation();
      } else {
         operation();
         operator = "+";
      }
      current_num = "";
   });
   minus.addEventListener("click", () => {
      if (operator === null) {
         operator = "-";
         operation();
      } else {
         operation();
         operator = "-"
      }
      current_num = "";
   });
   times.addEventListener("click", () => {
      if (operator === null) {
         operator = "*";
         operation();
      } else {
         operation();
         operator = "*"
      }
      current_num = "";
   });
   divide.addEventListener("click", () => {
      if (operator === null) {
         operator = "/";
         operation();
      } else {
         operation();
         operator = "/"
      }
      current_num = "";
   });
   enter.addEventListener("click", () => {
      operation()
      total = operator = num1 = num2 = null;
      current_num = ""
      console.log(total);
   });
   clear.addEventListener("click", () => {
      display.textContent = "0";
      current_num = ""
      total = operator = num1 = num2 = null;
   });


   function operation() {
      if (num1 === null) {
         num1 = Number(current_num);
         return;
      } else if (num2 === null) {
         num2 = Number(current_num);
         console.log(num2)
      } else if (total !== null) {
         num2 = Number(current_num);
         num1 = total;
      }
      switch (operator) {
         case "+":
            total = num1 + num2;
            break;
         case "-":
            total = num1 - num2;
            break;
         case "*":
            total = num1 * num2;
            break;
         case "/":
            total = num1 / num2;
            break;
         default:
            break;
      }
      display.textContent = total;
   }
});

