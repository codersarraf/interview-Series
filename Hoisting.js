//  Hoisting : (putting on top) - func declaration moved to top of the file/block.
//              process where the intrepeter move the declaration of func and variable or classes to the top of their scope
//              prior of the execution of code.

/*

test();
function test(){
    console.log('value of x is '+ x); //undefined b hoisczting happen but initialized with default value undefined.
    console.log('value of x is '+ y); //ref error bcz TDZ, where variable got declared/hoisted but not able to access value.
    console.log('value of x is '+ y); //ref error bcz TDZ, where variable got declared/hoisted but not able to access value.
    var x=60;
    let y=60;
    // const z; //missing initializer error if no value assigned.
    const z=5;
}
test();

*/

/*
Questions:*/

/*
function test(){
    var x;
    var X;
    var x; // var declared variable have global scope...
            // same variable can re-declare using var BUT THERE IS ONLY ONE INSTANCE OF IT.
    console.log("x is "+ x);
} 
test();
*/

/*
function varTest(){
    var x=1;
    {
    var x=2;
    console.log(x);//2
    }
    console.log(x);//2
} 

varTest()

function letTest(){ //let dont allow re-declaration.
    let x=1;
    {
    let x=2;
    console.log(x);//2
    }
    console.log(x);//1
} 
letTest();

*/

/*
function doSomeThing(){
    console.log(bar);
    var bar = 111;
    console.log(bar);
} 
doSomeThing();
*/


/*
var rate=10;
function getRate(){
    if (rate===undefined){
        var rate=6;
        return rate;
    }
    else {
        return 10;
    } 
} 
console.log(getRate());
*/

/*

1. What id Scope of TDZ :-

/*
TDZ START
const func =()=> console.log(letVar); //3
let letVar =3; //TDZ END
func();
*/
/*
func(); //cant access func , bcz it is arrow func which is not hoisted
const func =()=> console.log(letVar);
let letVar =3;
*/
/*
const func =()=> console.log(letVar); //ref error
func();
let letVar =3;
*/
/*

2. Why var hoisting is present in JS :-
    The js creator thus an unintended consequenses of func hoisting.

3. How hoisting works in js if it interpreted:-
    v8 engine process the code in 2 step...and v8 created in c++ which is compiled language.

*/
