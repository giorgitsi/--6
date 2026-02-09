function hello() {
  console.log("გამარჯობა!");
}


function greet(name) {
  console.log("გამარჯობა " + name);
}


function print1to10() {
  for (let i = 1; i <= 10; i++) console.log(i);
}


function printArray(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i]);
}


function printEven(n) {
  for (let i = 1; i <= n; i++) if (i % 2 === 0) console.log(i);
}


function multiplyByTwo(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] *= 2;
}


function printStudents(names, scores) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " - " + scores[i]);
  }
}


function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) console.log(n + " x " + i + " = " + n * i);
}


function addNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) arr[i] += num;
}


function sum(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

function arraySum(arr) {
  let s = 0;
  for (let x of arr) s += x;
  return s;
}

function maxNumber(arr) {
  let max = arr[0];
  for (let x of arr) if (x > max) max = x;
  return max;
}

function average(arr) {
  return arraySum(arr) / arr.length;
}

function countEven(arr) {
  let c = 0;
  for (let x of arr) if (x % 2 === 0) c++;
  return c;
}

function doubleArray(arr) {
  let newArr = [];
  for (let x of arr) newArr.push(x * 2);
  return newArr;
}

function countSymbol(text, symbol) {
  let c = 0;
  for (let ch of text) if (ch === symbol) c++;
  return c;
}