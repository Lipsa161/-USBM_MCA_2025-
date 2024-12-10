//Array
//array is a collection of statement
//Ex: Let newArray=[];
//let newArray=[];
//console.log(newArray);
//console.log(typeof newArray);

//example
/* let name="Dev";
let age=26;
let profession="Developer";

let isMarried="true";  */

//reason1: we need everything under a single variable name
//reason2:structured way ,code readly easy to maintain

//Array declaration traditional method
/*  let userArray=["Dev",29,"Developer",true];
console.log(userArray); */

//let newNumber=[1,2,3,4,5];
//console.log(newNumber);

//let numbers=[1,2,3,4,5];
//console.log(numbers);

/* let newNumber=new Array(1,2,3,4,5);
console.log(newNumber); */

//Array methods:
//read an array to check the length
//console.log(numbers.length);

//Accessing
 /* let cities=["bhubaneswar","cuttack","paradip","kendrapara","baleswar"];
console.log(cities[0]);
console.log(cities[4]);
*/
 

//last element:
/* let lastcity = cities.length-1 ;
console.log(cities[lastcity]); */

//Baleswar
//console.log(cities[2]);
//console.log(cities[lastcity/2]);

//modify
/*  console.log(cities);
let modifycity="bhadrak";
cities[2]=modifycity;
console.log(cities);  */

//to do:difference between push(),pop(),shift(),unshift()with proper defination and example

//add one or more element to the end of an array
//returns the new element
//push()
/*  console.log(cities);
let modify="jagatsinghpur";
cities.push(modify);
console.log(cities);
*/
 

//remove the element
//works the same way as push(), except that it removes the last element or elements from an array
//returns the removed element(s) and will return undefined if they array is empty

// pop()
/*console.log(cities);
let removecity="jagatsinghpur";
cities.pop(removecity);
console.log(cities);
*/

//works from the beginning of the array and removes the first element
//shift
/*console.log(cities);
let shiftcity="bhubaneswar";
cities.shift(shiftcity);
console.log(cities);
*/

//is the opposite of shift() and inserts element(s) at the beginning of the array
//unshift
/*console.log(cities);
let unshiftcity="bhubaneswar";
cities.unshift(unshiftcity);
console.log(cities);
*/

//concatenation(merge)
//ex:
let fruits=["apple","orange"];
let addarray=fruits.concat(["strawberry","dragon-fruits"]);
console.log(addarray);

//push and unshift
//the includes() method of array instances determines whether an array includes acertain value among its entities , returning true or false as appropriate
//example:
//let students=["lipsa","anshu","ankita","sonali"];
//students.includes();

//last element will not be added
//slice()
const animals=["ant","camel","duck","rabbit","elephant"];
const slice=animals.slice(2); //duck,rabbit,elephant
console.log(slice);
const slice1=animals.slice(2,4);
console.log(slice1);

//splice()
//if 0 add nothing will be deleted
const months=["jan","feb","april","may"];
months.splice(2,1,"mar");
console.log(months);
months.splice(3,0,"april");
console.log(months);
months.splice(2,3,"nov","dec");
console.log(months);


//double the number of array2
const array1=['a','b','c'];
const array2=[1,2,3,4,5];

for(let i=0;i<array2.length;i++){
    const doubled=array2[i]*2 ;
    console.log(doubled) ;
}

//forEach()
array2.forEach((L)=>{
    console.log(L*2);
}
);

//HOF:higher order function
let arr=["A","B","C","D","E","f"];
//for(let i=1;i<arr.length;i++){
 //   console.log(arr[i]);
//}

//using forEach()
arr.forEach((a,b)=>{  //enter parameter a and b as element and index
    console.log(a,b);
});

//map()
arr.map((a,b)=>{
//console.log(a); //in uppercase A,B,C,D,E,F
});

arr.map((a,b)=>{
    console.log(a.toLowerCase());  //a,b,c,d,e,f  //normal function
});

// higher function
const newArray=arr.map((a,b)=>{
    return a.toLowerCase();
});
console.log(newArray);

//Filter()
let numArray=[1,2,3,4,5,6,7];
//filter out the odd number
//in this method can we use the map method ?
const oddNumbers=numArray.filter((a)=>{
    return a%2!==0 ;
});
console.log(oddNumbers);

//Reduce()
//let number=[10,20,30,40];
//let sum=numbers.reduce(acc+num)



