//  create Func

/*named Function :
  
function welcome(){ //named func are hoisted
    console.log('welcome to uncommon gadgets')
}
welcome();
*/

// *********************************************************************

/*Anounymous Function :
  
const welcome =function(){ //not hoisted
    console.log('welcome to uncommon gadgets')
}
welcome();
*/

// *********************************************************************

/*Self Invoking Func : [mainly used in closure]

(function(){ //not hoisted
    console.log('welcome to uncommon gadgets');
})();
*/

// ************************************************************************

/* Func inside Func :

function add (num1, num2){
    return num1+num2;
}
function test (f, num1, num2){
   const sum = f(num1, num2)
   return sum;
}
const output = test (add,10,20);
console.log(output);
*/

// ****************************************************************************

// Function Nesting

/*function one(){
    console.log('welcome to tech adda')
    function two(){
        console.log('welcome to tech adda2') 
    }
    return two;
}
const output = one(); 
 output(); //welcome to tech adda
            //welcome to tech adda2
*/

// *******************************************************************************

/*Closure : nested func is closure, this means that nested func 
            can inherit the arguments and variables of its containing function.
            in other words, the inner func contains the scope of outer func.
function one(){
    const count =10;
    function two(){
        console.log(count) 
    }
    return two;
}
const output = one(); 
 output(); 
*/

// **********************************************************************************

/*
Questions 1 :

console.log(square); //ref error
console.log(square(5)); //ref error
const square = function (n){ //not hoisted
    return n*n;
}
*/

/*Questions 2 :

console.log(square); //ref error
console.log(square(5)); //ref error
var square = function (n){ //not hoisted
    return n*n;
}
*/

/*
Question 3:

function test(theObject){
    theObject.make ='Toyota'
}
const car_details ={    
    make:'Honda',
    model:'Accord',
    year:1998
};
console.log('car_details.make 1 ' + car_details.make) 
test(car_details);
console.log('car_details.make 2 '+ car_details.make)
*/

/* Question 4 :
var num1 = 20,
num2 =3,
name='Chamakh';

function getScore(){
    var num1 =2,
    num2=3;
    function add(){
        return name + ' scored '+ (num1+num2)
    }
    return add();
}
console.log(getScore());
*/

/* Question 5 :

function addSquares (a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);
}
const a = addSquares(2,3);
const b = addSquares(3,4);
const c = addSquares(4,5);
console.log(a,b,c);
*/

/*Question 5:

function A(x){  //example of closure and func nesting
    function B(y){
        function C(z){
            console.log(x+y+z);
        }
        C(3);
    }
    B(2);
}
A(1);

*/

// ***************************************************************************************************

/* Function Currying :
A process in func programming in which we can transform a
function with multiple argument into a sequence of nesting
functions. It returns a new func that excepts the next arguments inline.*/

function add(x){
    return function (y){
        return function (z){
            return x+y+z;
        }
    }
}

const output = add(10)(20)(30);
console.log(output);

*/