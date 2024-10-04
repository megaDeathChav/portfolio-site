'use client';
// import Image from "next/image";
// import TestComponent from "@/components/testComponent";
import React, {useState, useEffect } from 'react'
import TestComponent from '@/components/testComponent';

export default function Home() {

  //count name of variable, set count lets you change the state if the variable
  //use state is a method
  //use state makes those things (i.e setCounter)
  const [counter, setCounter] = useState(0);

  return (
    <body>
      <button onClick={()=> {setCounter(counter+1)}}>Click me!</button>
      <h1>Counter: {counter} </h1>
    
    </body>
  );
}


//React hooks:
//useState
//useEffect
//