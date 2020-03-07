/* typeof - returns string of the value type */
var a = {b: 'c'}
console.log(typeof a)

// `object` accessors
var obj = {
    a: "hello world",
    b: 42,
    c: true
}
obj.a
obj["a"]

// Arrays - instantiation and access
var arr = ['hello world', 42, true]
arr[0]
// Built in function of arrays - .length
arr.length

// Function declaration
// function foo() {
//     return 42;
// }

foo.bar = 'hello world';

// Built in type methods
var thing1 = 'hello world';
var thing2 = 3.14159

thing1.length
thing1.toUpperCase()
thing2.toFixed(4)

// Explicit type coercion
var v1 = "42";
var v2 = Number(v1);

// Implicit type coercion
var v3 = v1 * 5

// falsy values
""
0, -0, NaN
null, undefined
false

// truthy values
"hello"
42
true
// [ ]
[1,2,3]
{}
function foos() {}

/* equality operators
==    checks for value equality
=== checks for type and value equality
*/

// Hoisting
var v4 = 2

foo()
function foo() {
    v4 = 3;
    console.log(v4);
    var v4
}
console.log(v4);

// Nested Scope
// function foo() {
//     var a = 1;

//     function bar() {
//         var b = 2;

//         function baz() {
//             var c = 3;

//             console.log( a, b, c ); // 1 2 3
//         }

//         baz();
//         console.log( a, b );        // 1 2
//     }

//     bar();
//     console.log( a );               // 1
// }

// foo();

// function foo() {
//     var a = 1;

//     if (a >= 1) {
//         let b = 2;

//         while (b < 5) {
//             let c = b * 2;
//             b++;

//             console.log( a + c );
//         }
//     }
// }

// foo();

// Switch Statements
switch (a) {
    case 2:
        // do something
        break;
    case 10:
        // do another thing
        break;
    case 42:
        // do yet another thing
        break;
    default:
        // fallback to here
}