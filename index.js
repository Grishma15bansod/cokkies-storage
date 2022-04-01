document.cookie= "user=grishma"
document.cookie ="id=21"
document.cookie="admin=true; max-age=-1"
console.log(document.cookie);
document.cookie = "firstName=rahul;max-age=1"



//local storage 

localStorage.setItem('greetings','hello')  //key and value
localStorage.getItem('greetings')


setTimeout(()=>{
    localStorage.clear()
},2000)


---Interview questions---

//== vs === // reuturn boolean

//spread operator // it expands array or the objects where more arguments are requried

//var , let and const

//Execution context--- is an abstract concept that holds informations about the environment where the current code is being executed //---abstract -some details are not shown to you---give overview like an watch-global and function execution context
//GEC-

//Closure and example

//call , apply and bind ---rebind the value of "this"

//prototype-it is object from which other object can inherit properties

//First class function - where func can treted like other varibale kown as FCF

//Promises - to avoid call back hell and for cleaner coder

//Async and awaits ---syntacting sugar (easier to read syntax when compare to promise)

//Function constructor- it return the object

//Hoisting---it refers to the process where by the interpreter appears to move the declarations of function , variables to the top of their scopes, prior to execution of the code /it allows functions to be safely used in the code before they are declared/ variables are also hoisted except let and const 

//DOM -

//null and undefined --- null - empty value/undefined-not assigning 

//Not defined - if varibale does not delcared

//Pure functions- func which gives same output for the same set of input are the Pure functions

function add(a, b) {
    return a+b;
}
add(3,7);//7
add(3,7);//7
add(3,7);//7  --------Pure func

var x = 10;

function impure(a, b) {
    x ++;
    return a+b+x
}
console.log(impure(3,3));//17
console.log(impure(3,3));//18

//Event loop--it decides when call func inside call back queue will be pushed onto call stack//call stack- it follows FILO and for manage the and keep track of multiple function  calls, Microtask queue

//Prototype chaining

//SettimeOut

//callback hell-Nested call backs

//Temporal dead zone-it is a term used to describe the state where variable are unrechable

//Anonymous function - func without the name

//Higher order and call back function
