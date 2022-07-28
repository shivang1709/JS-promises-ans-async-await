//Write one example explaining how you can write a callback function?
//ANS
const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message,1000);

//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//Explain callback hell.
//Numbers
//1
// 2
// 3
// 4
// 5
// 6
// 7
//ANS
const msg = function () {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");   
}

setTimeout(msg,1000);
setTimeout(msg,2000);
setTimeout(msg,3000);
setTimeout(msg,4000);
setTimeout(msg,5000);
setTimeout(msg,6000);
setTimeout(msg,7000);

//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7
//ANS
let promiseOne = new Promise((resolve,reject) => {
    resolve();
})

promiseOne
.then(() => {
    setTimeout(() => {
        console.log("1");
        
    }, 1000);
})

.then(() => {
    setTimeout(() => {
        console.log("2");
        
    }, 2000);
})
.then(() => {
    setTimeout(() => {
        console.log("3");
        
    },3000);
})
.then(() => {
    setTimeout(() => {
        console.log("4");
        
    },4000);
})
.then(() => {
    setTimeout(() => {
        console.log("5");
        
    },5000);
})
.then(() => {
    setTimeout(() => {
        console.log("6");
        
    },6000);
})
.then(() => {
    setTimeout(() => {
        console.log("7");
        
    },7000);
})

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.
//ANS
const promiseTwo = new Promise((resolve,reject) => {
    resolve();
    //reject();
    
})

promiseTwo
.then((data) => {
    console.log("Promise resolved");
})
.catch((error) => {
    console.log("promise rejected");
})


//Create examples to explain callback function.
//ANS
const messageOne = function() {  
    console.log("This is call backBack example");
}

setTimeout(message,2000);


//Create examples to explain callback hell function.
//ANS
const getEmpId = () =>{
    setTimeout(() => {
        console.log("Fetching the Id's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName:"harsh",
                lName :"Bajaj",
                age : 28,
            }
            console.log(`The name of the employee is ${empDetails.fName} ${empDetails.lName} and the age id ${empDetails.age}`);

            setTimeout(() => {
                empDetails.gender = "Male";
                console.log(`The name of the employee is ${empDetails.fName} ${empDetails.lName} and the age id ${empDetails.age} and the gender is ${empDetails.gender}`);
                
            }, 2000);
            
        }, 2000);
        
    }, 2000);
}

//Create examples to explain promises function.
//ANS
const newP = new Promise((resolve,reject) => {
    setTimeout(() => {
        let Name = "Arpana";
        resolve(Name);
        //reject("Error in reading data");

        
    }, 3000);
})

newP
.then((data) => {
    console.log(`Name printed successfully : ${data}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("successfully executed");
})


//Create examples to explain async await function.
//ANS
let promiseNew = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promiseNew; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();

//Create examples to explain promise.all function.
//ANS
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});