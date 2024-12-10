/* -disable no-unused-vars */
import React from "react"
import { useState } from "react";

const Counter=()=>{
    const[counter,setCount]=useState(0);

   // let counter=0;
    const increment = () =>{
        counter++;
        console.log(counter);

    };
    //increment();
    //increment();
    console.log(counter);
        return (
    <div>
        <h2 className="text-3x1">Count:{counter}</h2>
        <button onClick={increment}
        className="border-2 border-white bg-sky "
    </div>
    );
};
export default Counter;