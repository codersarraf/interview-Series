/*let x =10;
console.log('value of X is' + x); //10
let y=x;
console.log('value of Y is' + y);//10
*/

/*
//Deep Copy  : it means that all the value of new variable are copied 
and disconnected from original variable

let x =10;
console.log('value of X is' + x); //10
let y=x;
y=20; //Deep Copy:- No connection between x and y.
console.log('value of Y is' + y);//20

Premitive Types :- Number, String, Boolean [for deep copy]
*/

/*
//Shallow Copy:  it means certain values are still connected to original values.

let arr1=[1,2,3,4]
console.log(arr1);//[ 1, 2, 3, 4 ]

arr2=arr1; //arr2 is 
arr2.push(5);
console.log(arr2) //[ 1, 2, 3, 4, 5 ]
console.log(arr1)//[ 1, 2, 3, 4, 5 ]

arr1.push(6);
console.log(arr2)//[ 1, 2, 3, 4, 5, 6 ]
console.log(arr1)//[ 1, 2, 3, 4, 5, 6 ]
*/

/* Question 1:- Make this a deep copy?

function question1(){
    const arr1=[1,2,3,4];
    const arr2 = [...arr1]; ////changed arr1 to [...arr1] to make it deep copy, using spread operator we create deep copy, 
                        //    now arr1 and arr2 is disconnected.
    arr2.push(10);
    console.log(arr2)
    console.log(arr1)
}
question1();
 */


/* Question 2:- Make this a deep copy?

function question2(){
    const user1={
        name : 'Amit',
        channel : 'techAdda'
    }
    const user2={...user1} //changed user1 to {...user1} to make it deep copy
    //or we can write as,  const user2=Object.assign({},user1)
    user2.name =

     'coolAmit',
    console.log(user2);
    console.log(user1);

}
question2();
*/

/*Question 3 : Make this a deep copy-

function question3(){
    const user1={
        name : 'Amit',
        channel : 'techAdda',
        location :{ 
            city:'Motihari',
            state:'Bihar'
        }
    }
   // const user2={...user1};
//    const user2=Object.assign({},user1)

    const user2 = JSON.parse(JSON.stringify(user1)); //nested obj can also deep copied
    user2.location.city='mysuru'
    console.log(user2)
    console.log(user1)

}
question3();  

//for nested objects spread operator and obj.assign 
not work for making it deep copy. so we use const user2 = JSON.parse(JSON.stringify(user1));
*/

/*

**********************************************************************************************************************
**********************************************************************************************************************
Topic : When to use JSON.parse and JSON.stringify & when we dont have to use them ?*/ 

/* 1. for Date function Dont use JSON.parse and JSON.stringify.

function question4(){
    const testObject1={
        sampleDate : new Date(),
    };
    const testObject2 = JSON.parse(JSON.stringify(testObject1)); //nested obj can also deep copied
    console.log(testObject1);
    console.log(testObject2);
}
question4(); 
*/


/*2. for obj contain function and variable contain "undefined, NaN & Infinity" , then Dont use JSON.parse and JSON.stringify.

function question5(){
    const testObject1={
        sampleFunction : console.log,
        sampleUndefined : undefined
    };
    const testObject2 = JSON.parse(JSON.stringify(testObject1)); //nested obj can also deep copied
    console.log(testObject1);
    console.log(testObject2); //empty object
}
question5();
*/