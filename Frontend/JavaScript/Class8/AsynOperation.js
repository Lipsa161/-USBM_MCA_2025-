//Asyn Operation Chapter

//Synchronous code
/* console.log("start");
console.log("middle");
console.log("end");

//Asynchronous Code with setTimeout
console.log("start");
setTimeout(()=>console.log("middle"),2000);  // executes after 2 secconds
console.log("end");
*/

const url=("https://jsonplaceholder.typicode.com/users");
/*fetch(url)
.then((res)=>res.json())
.then((res)=>console.log(res))
.then((error)=>console.log(error));
*/

async function fetchdata(){
try {
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);

}catch(error){
    console.log(error);
}
}
fetchdata();

