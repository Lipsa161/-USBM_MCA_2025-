//function
// -> it is a reusable block of code to perform some certain task

//declaration
/*function sayName(){
    //code here
}*/

//write a function to print your name
//syntax
function printName(){
    console.log("lipsa");
}
printName(); //invokation or function call

//arguments and parameters
function printName(name){
    console.log(`my name is ${name}`);
}
printName("lipsa");

function printName(name,age,city){
    console.log(`my name is ${name},my age is ${age},my city is ${city}`);
}
printName("lipsa");

//"return keyword"
//stop the execution process
//return the value to the caller

//function printName(name,age,city){
  //  return`my name is ${name},${age},${city}`;
//}
//console.log(printName("lipsa",21,"bbsr")); //invokation or function call
//console.log()
//let output=printName("lipsa",21,"bbsr");
//console.log(output);

//ES6
//ARROW FUNCTION
//syntax
/*console.log(printName("lipsa")); //before
const printName=(name)=>{
    return `my name is ${name}`;
}
console.log(printName("lipsa")); //after
*/

/*const calculator =(a,b,operator) => {
    switch(operator){
        case "+" :
            return a+b;
            break;
            case "-" :
                return a-b;
                break;
                case "*" :
                    return a*b;
                    break;
                    case "/" :
                        return a/b;
                        break;
                        default :
                        return "invalid operator";
                        break; 
    }
};
const output=calculator(10,5,"+");
console.log(output); */

//const add=(a,b) => console.log(add(5,6));
//add()
/*const add=(a,b) =>{
    return a+b;
}; */
 //console.log(add(5,7)) ;

 //to do BMI calculator
// const bmi=(weight,height)=>weight=height*height => { 
//return bmi;
 //}
//console.log(bmi(1,75,75));
 //}

//task
 //to do : make a user authentication system using callback function
 //password validator

 //Asynchronous
 //setTimeout  (){//} //fun-callback
 //setInterval  (){//}  //fun-anonymous
 //ex :
 setTimeout(() => {
    console.log("hey USBM");
} ,5000)
 

 

 
 
