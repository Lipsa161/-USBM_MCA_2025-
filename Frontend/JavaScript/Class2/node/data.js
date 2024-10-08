let data;
console.log(typeof data); //undefined
console.log(data);
//number
let num1=50;
let decimal_no=1.0001;
let pi=3.14;
let age=25;
let roll_no=21;

console.log(typeof num1);   //number
//addition
let num2=100;
let num3=125;
let addition=num2+num3;
console.log(addition);
//substraction
let num4=213;
let num5=200;
let substraction=num4-num5;
console.log(substraction);
//multiplication
let num6=21;
let num7=7;
let multiplication=num6*num7;
console.log(multiplication);
//division
let num8=10;
let num9=5;
let division=num8/num9;
console.log(division);

//bigint
let huge_no=1111111111135689777777777777777777777544444554444444444444444444444;
console.log(typeof huge_no);
//symbol

let sym1=Symbol("sym1");
let sym2=Symbol("sym1");
console.log(sym1===sym2);   //false

 //NaN (not a number)
 let num10=0;
 let num11=0;
 console.log(num10/num11);

//0
 let num12=0;
 let num13=10;
 console.log(num12/num13) ;

 //boolean
 let isLoggedIn=false;
 let isSingle=true;
 console.log(isLoggedIn);
console.log(isSingle);

//string
let name='lipsa';
let city='pdp';
console.log(name);
console.log(city);
//template literal(task)

let name1='lipsa1';
let age1=21;
let city1='bhubaneswar';
let roll_no1=52;
let college='usbm';
let batch='MCA_2ndyr';
console.log(`my name is: ${name1}  age is: ${age1} city is :${city1} roll_no is: ${roll_no1} college is: ${college}  batch is: ${batch}`);

 //string manipulation(to check the length of the string)

 console.log(city1.length); //length
 
 //replacing character(task)
 let my_website="www.qulith.com";
 console.log(my_website.replace(".","-"));

 //coercion
 let num20=100;
 let num21="100";
 console.log(num20+num21);
