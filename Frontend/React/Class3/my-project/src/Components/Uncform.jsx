import React, { useState } from 'react'
import { useRef } from 'react';

const Uncform = () => {
    const [name,setName]=useState("");
    const nameRef=useRef(null);
    const showName =() =>{
        setName(nameRef.current.value);
        alert(name);
    }
    console.log(name);
    console.log(nameRef);

  return (
    <div>
      <label htmlFor="">Name:</label>
      <input className='border-2 m-2' type="text" placeholder='Enter Your Name'></input>
      <button className='border-2'>Show Name</button>
    </div>
  )
}

export default Uncform
