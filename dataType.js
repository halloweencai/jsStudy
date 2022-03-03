// console.log(age)
// console.log(typeof age)
// console.log(null === undefined)
// console.log(31250000)
// console.log(3.125e7)
// console.log(0.0000003)
// console.log(3e-7)
// console.log(0.1 + 0.2)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(5e-324)
// console.log(1.7976931348623157e+309)

// let result = Number.MAX_VALUE + Number.MAX_VALUE
// console.log(isFinite(result))

// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)

// console.log(0/0)
// console.log(-0/+0)
// console.log(5/0)
// console.log(5/-0)

// console.log(NaN == NaN)

// console.log(isNaN(NaN))
// console.log(isNaN(10))
// console.log(isNaN("10"))
// console.log(isNaN("blue"))
// console.log(isNaN(true))

// console.log({}.valueOf())

// console.log(parseInt(''))
// console.log(Number(''))
// console.log(parseFloat(''))

// let num = 10;
// console.log(num.toString(2))

// console.log(true.toString())
// console.log({}.toString())

// let a = 'first line\nsecond line'
// let b = 'first line second line'
// let c = `first line
// second line`
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(a === c)

// let pageHTML =
// `<div>
//   <a href="#">
//     <span>Jake</span>
//   </a>
// </div>`
// console.log(pageHTML)

// let foo = {
//   toString: () => 'World'
// }

// function capitalize (word) {
//   return `${ word[0].toUpperCase() }${ word.slice(1) }`
// }

// console.log(`${capitalize('hello')}, ${capitalize('world')}!`)

// function simpleTag (strings, aValExpression, bValExpression, sumExpression) {
//   console.log(strings)
//   console.log(aValExpression)
//   console.log(bValExpression)
//   console.log(sumExpression)

//   return 'footer'
// }

// let taggeResult = simpleTag`${ 6 } + ${ 9 } = ${ 15 }`

// console.log(taggeResult)

// let fooSymbol = Symbol('foo')
// let allSymbol = Symbol('all')
// console.log(fooSymbol)
// console.log(typeof fooSymbol)
// console.log(fooSymbol == allSymbol)

// let mySymbol = new Symbol()

// let fooGlobalSysbol = Symbol.for('foo')
// console.log(typeof fooGlobalSysbol)
// let fooSymbol = Symbol.for('foo')
// console.log(fooGlobalSysbol == fooSymbol)

// let fooSymbol = Symbol.for()
// console.log(fooSymbol)

// let s = Symbol.for('foo')
// console.log(Symbol.keyFor(s))

// let s2 = Symbol('bar')
// console.log(Symbol.keyFor(s2))

// Symbol.keyFor(123)

// let s1 = Symbol('foo'),
//   s2 = Symbol('bar'),
//   s3 = Symbol('baz'),
//   s4 = Symbol('qux');
    
// let o = {
//   [s1]: 'foo val'
// }
// o[s2] = 'foo val'

// Object.defineProperty(o, s2, {
//   value: 'bar val'
// })
// Object.defineProperties(o, {
//   [s3]: { value: 'baz val' },
//   [s4]: { value: 'qux val' }
// });
// console.log(o[s3])

// let s1 = Symbol('foo'),
//   s2 = Symbol('bar');
// let o = {
//   [s1]: 'foo val',
//   [s2]: 'bar val',
//   baz: 'baz val',
//   qux: 'qux val'
// }
// console.log(Object.getOwnPropertySymbols(o));
// console.log(Object.getOwnPropertyNames(o));
// console.log(Object.getOwnPropertyDescriptors(o));
// console.log(Reflect.ownKeys(o));

// const obj = {}
// const s1 = Symbol()
// const s2 = Symbol()
// const s3 = Symbol()
// const arr = [s1, 'jj']

// obj[s1] = 'jjj'
// obj[s2] = 'kkk'
// obj[s3] = 'ppp'
// obj.open = 'sss'

// for (const att of arr) {
//   console.log(att)
// }

// console.log(global)

// let size = Symbol('size');
// class Collection {
//   constructor() {
//     this[size] = 0;
//   }

//   add (item) {
//     this[this[size]] = item;
//     this[size]++;
//   }

//   static sizeOf (instance) {
//     return instance[size];
//   }
// }

// let x = new Collection();
// Collection.sizeOf(x) // 0

// x.add('foo');
// Collection.sizeOf(x) // 1

// Object.keys(x) // ['0']
// Object.getOwnPropertyNames(x) // ['0']
// Object.getOwnPropertySymbols(x) // [Symbol(size)]

// const FOO_KEY = Symbol('foo')

// function A () {
//   this.foo = '111'
// }

// if (!global[FOO_KEY]) {
//   global[FOO_KEY] = new A()
// }

// module.exports = global[FOO_KEY]

