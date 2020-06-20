// Function
// - fundamental buildin block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return;}
// on function === one thing
// naming: doSometing, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('Hello !!'); 
}

printHello(); 

function log(message){
    console.log(message);
}
log('luck@');
log(1234567);

// 2. Parmeters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder'
}
const member7 = {name : 'jeongjin'};
console.log(member7);
changeName(member7);
console.log(member7);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    // if(from === undefined){
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);        
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'JeongJin');
printAll('love', 'kiss', 'badroom','dipkiss');

// 5. Variable scope
let globalMessage = 'global'; // gloval variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage); // global variable
    function printAnother(){
        console.log(message); // local variable
        let childMessage = 'childHello';
    }
    // console.log(childMessage); //error
    return undefined; // 생략가능
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;

}
const result = sum(1,2);  //3
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad example code
function upgradeUser(user){
    if (user.point > 10){
        // long upgrade logic...
    }
}

// good example code
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
        // long upgrade logic...
}