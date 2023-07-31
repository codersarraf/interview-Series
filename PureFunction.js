// PureFunction : Those func are deterministic in nature.


/*
function areaOfRectangle(length, width){
    return length*width
}

console.log(areaOfRectangle(10,20)); //200
console.log(areaOfRectangle(10,20)); //200
*/


/*
function test (length, width){
    const temp = Math.floor(Math.random()*10);
    return length*width*temp;
}
console.log(test(10,20)); //different value each time
console.log(test(10,20));
console.log(test(10,20));
console.log(test(10,20));
*/

// Question 1 - What is console.log();- It is a function.
// Question 2-  console.log is a pure func? - Yes
// Quwstion 3 - if consoe.log in any func, it is impure func bcz of side effect.
// array methods are pure but if it is enclosed inside any function, then it make that parent function impure.
// Question 4 - Why pure func are essential:-  Deterministic, memoisation