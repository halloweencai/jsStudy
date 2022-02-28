// var声明作用域
// function test () {
//   var a = '1'
// }
// test()
// console.log(a)

// function test1 () {
//   a = '1'
// }
// test1()
// console.log(a)

// function foo () {
//   console.log(a)
//   var a = '1'
// }

// foo()

// if (true) {
//   var name = 'Matt'
//   console.log(name)
// }
// console.log(name)

// if (true) {
//   let name = 'Matt'
//   console.log(name)
// }
// console.log(name)

// let age
// {
//   let age
// }

// console.log(name)
// let name = 'znn'

// let i = 0;
// for (const j = 7; i < 5; ++i) {
//   setTimeout(() => console.log(i), 0)
// }

// for (; j < 5;) {
//   const j = 0
//   console.log(j);
// }

let i = 0;
for (const j = 7; i < 5; ++i) {
  console.log(j);
}
// 7, 7, 7, 7, 7
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}
// a, b
for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1, 2, 3, 4, 5