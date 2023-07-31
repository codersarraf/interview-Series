/* Promises :-  An obj representing the eventual completion or failure of an async operation.

=>Pending : Initial State, neither fullfilled nor rejected.
=>Fullfilled : Meaning that the operation was completed successfully.
=>Rejected : Meaning that the operation failed.

*/

/*Cretae Promise :

const promise1 = Promise.resolve('Welcome to Tech Adda');
promise1.then(data =>{
    console.log('Promise success '+ data)
}).catch(err=>{
    console.log('Promise Failure '+ err)
})

*/


/* Cretae Promise that resolve 2 sec to execute :

const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Welcome to Tech Adda')
    }, 2000);
}) 

promise.then(data=>{
    console.log('Promise success '+ data)
}).catch(err=>{
    console.log('Promise Failure '+ err)
})

*/

/* EVENT LOOP :

console.log('Before promise starts'); //1st
const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Welcome to Tech Adda')
    }, 2000);
}) 

console.log('After promise start'); //2nd
promise.then(data=>{
    console.log('Promise success '+ data) //last
}).catch(err=>{
    console.log('Promise Failure '+ err)
})
console.log('After promise end') //3rd

*/



/*Promise Chaining : To call api in sequence

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Welcome to Tech Adda 1')
    }, 1000);
}) 
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Welcome to Tech Adda 2')
    }, 2000);
}) 

promise1.then(data1=>{
    console.log('Promise success '+ data1) //last
    promise2.then(data2=>{
        console.log('Promise success '+ data2) //last
    }).catch(err=>{
    console.log('Promise Failure '+ err)
    })
}).catch(err=>{
    console.log('Promise Failure '+ err)
})

*/

// *******************************************************************************************************

/* How to get rid of unreadability of Promise Chaining :

function one(){
    const promise1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
    return promise1;
}

function two(){
    const promise2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 2000);
    }) 
    return promise2;
}

function three(){
    const promise3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 2000);
    }) 
    return promise3;
}

async function test(){
    try{
        const resp1 = await one();
        const resp2 = await two();
        const resp3 = await three();
        const output = (resp1+resp2+resp3)
        console.log('Response is '+  output)
    }catch (err){
        console.log('Error is '+ err);

    }
}
test();
*/

// *************************************************************************************************************

/* Finally in show Loader :

function one(){
    const promise1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
    return promise1;
}

function two(){
    const promise2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 2000);
    }) 
    return promise2;
}

function three(){
    const promise3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 2000);
    }) 
    return promise3;
}

async function test(){
    let showLoader = true;
    try{
        const resp1 = await one();
        const resp2 = await two();
        const resp3 = await three();

        const output = (resp1+resp2+resp3)
        console.log('Response is '+  output)
    }catch (err){
        console.log('Error is '+ err);

    }
    finally{ 
        showLoader=false;
    }
}
test();
*/

//How to change squential calling to parallel :

function one(){
    const promise1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 1000);
    })
    return promise1;
}

function two(){
    const promise2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 2000);
    }) 
    return promise2;
}

function three(){
    const promise3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 2000);
    }) 
    return promise3;
}

async function test(){
    let showLoader = true;
    try{
        // const resp1 = await one();
        // const resp2 = await two();
        // const resp3 = await three();
        // const output = (resp1+resp2+resp3);

        // const output = await Promise.all([one(), two(), three()]); //if any promise have issue it wont execute any of three.
        const output = await Promise.allSettled([one(), two(), three()]); //wait for all promise to be resolved and return array. allow to handle rejected promise seperately.
        
        console.log('Response is '+  output)
    }catch (err){
        console.log('Error is '+ err);

    }
    finally{ 
        showLoader=false;
    }
}
test();