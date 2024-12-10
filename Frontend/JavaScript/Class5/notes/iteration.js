//iteration
//print 1 to 10
//let start_num=1
//let next_num=start_num + 1;
//let end_num=10
//console.log(start_num)
//console.log(end_num)
//console.log(nect_num2)
//let num=2 ;
//console.log(num);
//console.log(num);
//console.log(num);

//while loop
//syntax
//while (condition){
//code to be executed
//}

//let num2 =1; //declaration
//console.log("global:" , num2); //print 1
//while(num2 <=10){
  //  console.log("block:" ,num2) ; //print
   // num++;
//}
//console.log("global:" , num2); //print11

//do while loop
//syntax
//do{
//code to be executed
//} while (condition)

// ex : ask for user to the correct  input

let userAns;
do {
  userAns = prompt("What is the capital of Odisha?");
   console.log("Wrong");
 } while (userAns !== "Bhubaneswar");

console.log("Correct");

 console.log("Bhubaneswar" !== "Bhubaneswar");  // true

//for loop
//print 1 to 5

/*for(let i=1;i<5;i++){
    console.log(i);
}

//print 5 to 1

for(let i=5;i>=1;i--){
    console.log(i)
}*/

//create random numbers and add them upto 5 times
let sum = 0;
for(let i = 1;i<=5;i++){
    let random = Math.floor(Math.random()*10);
    console.log("The number is",random);
     sum+=random;
    //console.log(`the random sum result is ${result}`);
}
console.log("The sum is ",sum);
    
//nested loop
//for loop inside a for loop

 for(let i=1;i<=5;i++){
    for(let j=1;j<=2;j++){
        console.log(j);
    }
    console.log(i);
 }
    
 //pattern printing

 for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern +="*";
    }
    console.log(pattern);
 }













