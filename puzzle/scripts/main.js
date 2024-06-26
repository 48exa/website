/*!*
 * ty ev for the js
 */

let opl1 = document.getElementById("solve1"); // 2 2
let opl2 = document.getElementById("solve2"); // 2 3
let opl3 = document.getElementById("solve3"); // 3 2
let opl4 = document.getElementById("solve4"); // 3 3

let input1 = document.getElementById("num1"); // 1 1
let input2 = document.getElementById("num2"); // 1 4
let input3 = document.getElementById("num3"); // 2 4
let input4 = document.getElementById("num4"); // 3 4
let input5 = document.getElementById("num5"); // 4 2
let input6 = document.getElementById("num6"); // 4 3

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function solvefast() {
   let opl22 = -100;
   let opl23 = -100;
   let opl32 = -100;
   let opl33 = -100;

   while (
      opl23 + opl33 != input6.value ||
      opl22 + opl33 != input1.value ||
      opl32 + opl23 != input2.value
   ) {
      opl32 += 0.5;
      opl22 = input5.value - opl32;
      opl23 = input3.value - opl22;
      opl33 = input4.value - opl32;

      if (
         opl32 >
         Math.abs(
            parseInt(input1.value) +
               parseInt(input2.value) +
               parseInt(input3.value) +
               parseInt(input4.value) +
               parseInt(input5.value) +
               parseInt(input6.value) * 2.5
         )
      ) {
         alert("not solveable");
         break;
      }
   }
   opl1.innerText = opl22;
   opl2.innerText = opl23;
   opl3.innerText = opl32;
   opl4.innerText = opl33;

   console.log("solving fast");
}

async function solve() {
   // 10
   let opl22 = -100;
   let opl23 = -100;
   let opl32 = -100.5;
   let opl33 = -100;

   if (
      parseInt(input1.value) > 0 &&
      parseInt(input2.value) > 0 &&
      parseInt(input3.value) > 0 &&
      parseInt(input4.value) > 0 &&
      parseInt(input5.value) > 0 &&
      parseInt(input6.value)
   ) {
      opl22 = 0;
      opl23 = 0;
      opl32 = -0.5;
      opl33 = 0;
   }

   while (
      opl23 + opl33 != input6.value ||
      opl22 + opl33 != input1.value ||
      opl32 + opl23 != input2.value
   ) {
      await sleep(0);

      opl32 += 0.5;
      opl22 = input5.value - opl32;
      opl23 = input3.value - opl22;
      opl33 = input4.value - opl32;

      opl1.innerText = opl22;
      opl2.innerText = opl23;
      opl3.innerText = opl32;
      opl4.innerText = opl33;

      if (
         opl32 >
         Math.abs(
            parseInt(input1.value) +
               parseInt(input2.value) +
               parseInt(input3.value) +
               parseInt(input4.value) +
               parseInt(input5.value) +
               parseInt(input6.value) * 2.5
         )
      ) {
         alert("not solveable");
         break;
      }
   }
   opl1.innerText = opl22;
   opl2.innerText = opl23;
   opl3.innerText = opl32;
   opl4.innerText = opl33;
}

function reset() {
   input1.value = null;
   input2.value = null;
   input3.value = null;
   input4.value = null;
   input5.value = null;
   input6.value = null;
}

function gen() {
   function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   opl1.innerText = randInt(-100, 100);
   opl2.innerText = randInt(-100, 100);
   opl3.innerText = randInt(-100, 100);
   opl4.innerText = randInt(-100, 100);
}

function check() {
   input1.value = parseInt(opl4.innerText) + parseInt(opl1.innerText);
   input2.value = parseInt(opl2.innerText) + parseInt(opl3.innerText);
   input3.value = parseInt(opl1.innerText) + parseInt(opl2.innerText);
   input4.value = parseInt(opl3.innerText) + parseInt(opl4.innerText);
   input5.value = parseInt(opl1.innerText) + parseInt(opl3.innerText);
   input6.value = parseInt(opl2.innerText) + parseInt(opl4.innerText);
}

function softreset() {
  opl1.innerText = null;
  opl2.innerText = null;
  opl3.innerText = null;
  opl4.innerText = null;
}