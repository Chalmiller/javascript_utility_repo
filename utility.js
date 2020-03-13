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

// ternary operator
var a = 42;

var b = (a > 41) ? "hello" : "world";

// Strict Mode
function foo() {
    "use strict";

    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}

// this code is not strict mode

// Immediately invoked function expression - IIFE
(function IIFE(){
    console.log( "Hello!" );
})();
// "Hello!"

// More on IIFEs
var x = (function IIFE(){
    return 42;
})();

x;  // 42

// Closures
function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };

    return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );       // 4  <-- 1 + 3
plusOne( 41 );      // 42 <-- 1 + 41

plusTen( 13 );      // 23 <-- 10 + 13

// Modules
function User(){
    var username, password;

    function doLogin(user,pw) {
        username = user;
        password = pw;

        // do the rest of the login work
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

// create a `User` module instance
var fred = User();

fred.login( "fred", "12Battery34!" );

// the `this` reference type

function foo() {
    console.log( this.bar );
}

var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

// --------

foo();              // "global"
obj1.foo();         // "obj1"
foo.call( obj2 );   // "obj2"
new foo();          // undefined

// Polyfilling
if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}

// Transpiling - converts new ECMAscript conventions to older conventions for browser compatibility.
// Babel is often used for this

// .map array function
[1,2,3,4,5].map(function(value) {
    return value*10;
})

// filter arary function
[1,2,3,4,5].filter(function (value) {
    return value > 3;
})

// reduce array function
var sum = [1,2,3,4,5].reduce(function (prevVal, currVal, index, array) {
    return prevVal + currVal;
})

// Prototypal inheritance
function ExampleClass() {
    this.name = "Class";
    this.sayName = function() {
        console.log(this.name);
    }
}

var example1 = new ExampleClass();
example1.sayName();

ExampleClass.prototype.sayName = function() {
    console.log(this.name);
}
