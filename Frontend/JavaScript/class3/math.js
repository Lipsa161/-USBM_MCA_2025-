let num1=5;
let num2=3;
let result=num1+num2;
console.log(result);
let substraction=num1-num2;
console.log(substraction);
let multiplication=num1*num2;
console.log(multiplication);
let division=num1/num2;
console.log(division);

//modulo operator
let mod=num1%num2;
console.log(mod);

 //even and odd
 let n=29;
 let even=n%2;
 console.log(even);
 let odd=n%2;
 console.log(odd);

 //expomentiation operator
 let square=(2**2);
 console.log(square);

 //relational operator
 //to compare two value
 console.log(10>5);
 console.log(10<5);
 console.log(5>=5);
 console.log(10>!5);
 console.log(!5);

 //equality operator
 //== :value check
 //=== :value and data type check
 console.log(5 == 5);
 console.log(5==6);
 console.log(5=="5");
console.log(5==="5");
console.log(5 !="5");
console.log(5!=="5");

//conditional statements
//if (condition){}
//true code to be executed here
//}
//falsy value
//false,0,-0,"",'',``,null,undefined,NaN
 if(false){
    console.log("it is true");
 }

if(" "){
    console.log("it is true");
}
if(""){
    console.log("it is true");
}
if(-0.0534){
    console.log("it is true");
}
//task
 let total_bill=500;
 if(total_bill>100){
    console.log("discount");
 }
 else{
    console.log("no discount");
 }
 //task
 let gender;
 let age=50;
 if(gender==="male")
    {
    console.log("male");
    }
 
    else if(age>=22)
    {
   console.log("he can marry");
 }
 else
 {
   console.log("cannot marry");
 }



 //task

 let age1=60;
 if(age1>=60)
    {
   console.log("senior citizen");
 }
 else if(age1>=18)
    {
 console.log("adult");
 }
 else
 {
    console.log("minor");
}
 
//task
//print all the vowels
let char="a";
if(char==="a"){
    console.log("a is vowel");
}

//check vowel
//using switch case 
let char1="a";
switch(char1){
    case "a":
        console.log(" its vowel");
        break;

case "e":
        console.log(" its vowel");
        break;

case "i":
        console.log(" its vowel");
        break;

case "o":
        console.log(" its vowel");
        break;

case "u":
        console.log(" its vowel");
        break;
default:
    console.log("not a vowel");
    break;        
}
//task
//print week of the day
let week;
switch(week){
    case 0:
        console.log("sunday");
        break;
        case 1:
            console.log("monday");
            break;
            case 2:
                console.log("tuesday");
                break;
                case 3:
                    console.log("wednesday");
                    break;
                    case 4:
                        console.log("thursday");
                        break;
                        case 5:
                            console.log("friday");
                            break;
                            case 6:
                                console.log("saturday");
                                break;
                                default:
                                    console.log("not a day");
                                    break;
}
//task
//print month of the year
let month;
switch(month){
    case 0:
        console.log("january");
        break;
        case 1:
            console.log("february");
            break;
            case 2:
                console.log("march");
                break;
                     case 3:
                     console.log("april");
                     break;
                            case 4:
                            console.log("may");
                            break;
                                   case 5:
                                   console.log("june");
                                   break;
                                   case 6:
                                    console.log("july");
                                    break;
                                    case 7:
                                        console.log("august");
                                        break;
                                        case 8:
                                            console.log("september");
                                            break;
                                            case 9:
                                                console.log("october");
                                                break;
                                                case 10:
                                                    console.log("november");
                                                    break;
                                                    case 11:
                                                        console.log("december");
                                                        break;
                                                        default:
                                                            console.log("not a month");
                                                            break;
}