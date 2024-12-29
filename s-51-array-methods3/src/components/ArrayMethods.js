import React, { useRef, useState } from "react";

const ArrayMethods = () => {
  let inputRef = useRef();
  const [array, setArray] = useState([5, 2, 3, 4]);
  let array1=[80,90,10,20,30,40,49,90]

  return (
    <div>
      <h1>Array Manipulation</h1>
      <h2>Origial Array: {array1.join( ",")}</h2>
      <h2 id="pop"></h2>
      <h2 id="push"></h2>
      <h2 id="unshift"></h2>
      <h2 id="shift"></h2>
      <p id="input"></p>
      <p id="output"></p>
      
            <input ref={inputRef} ></input>
      <br></br>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array1}`
         let newArray=[];
         array1.forEach((ele,i)=>{
           console.log(ele)
            newArray[i]=ele;
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        forEach
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array :[${array1}]  logic: returns ele%2===0`
         
          let newArray=array1.every((ele,i)=>{
           return ele%2===0
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        every
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns ele%7===0`
         
          let newArray=array1.some((ele,i)=>{
           return ele%7===0
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        some
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns ele%7===0`
         
          let newArray=array1.filter((ele,i)=>{
           return ele%7===0
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        filter
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array :[${array1}]  logic: returns ele%20===0`
         
          let newArray=array1.find((ele,i)=>{
           return ele%20===0
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        find
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns ele%20===0`
         
          let newArray=array1.findIndex((ele,i)=>{
           return ele%20===0
          });
          document.getElementById("output").innerHTML=`Output Array is: ${newArray}`
        }}
      >
        findIndex
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns ele%20===0`
         
          let newArray=array1.findLast((ele,i)=>{
           return ele%20===0
          });
          document.getElementById("output").innerHTML=`Output Array: ${newArray}`
        }} >findLast</button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns ele%2===0`
         
          let newArray=array1.findLastIndex((ele,i)=>{
           return ele%20===0
          });
          document.getElementById("output").innerHTML=`${newArray}`
        }}
      >
        findLastIndex
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : [${array1}]  logic: returns total+=ele`
         let alphabets=['A','B','C','D','E','F','G']
          
         
         let total=alphabets.reduce((total,ele,i)=>{
           return total+=ele
          });
          document.getElementById("output").innerHTML=`${total}`
        }}
      >
        reduce
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array :  [${array1}]  logic: returns total+=ele`
         let alphabets=['A','B','C','D','E','F','G']
          
         
         let total=alphabets.reduceRight((total,ele,i)=>{
           return total+=ele
          });
          document.getElementById("output").innerHTML=`${total}`
        }}
      >
        reduceRight
      </button>
      <button
        onClick={() => {

          document.getElementById("input").innerHTML=`Original array :[${array1}]`
         let newArray=array1.sort()
          
          document.getElementById("output").innerHTML=`${newArray}`
        }}
      >
        sort
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array :  [${array1}] `
         
          let newArray=[]
          newArray=array1.map((ele,i)=>{
           return newArray[i]=`#${ele}`
          });
          document.getElementById("output").innerHTML=`Output Array:   ${newArray}`
        }}
      >
        map
      </button>

      <br></br>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array is : ${array}`

           array.push(inputRef.current.value)
            document.getElementById("output").innerHTML=`After push array is : ${array}`
          
           
        }}
      >
        Push
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array is: ${array}`
            document.getElementById("output").innerHTML=`poped number is: ${array.pop()}`
            
        }}
      >
        Pop Last Item
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array is: ${array}`

            document.getElementById("output").innerHTML=`After Shift: ${array.shift()}`
           
        }}
      >
        Shift
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            array.unshift(inputRef.current.value)
            document.getElementById("output").innerHTML=`After unshift array is : ${array}`
        }}
      >
        Unshift
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array: ${array}`
          const newArray = [...array];
          newArray.splice(2, 1, 6);
          setArray(newArray);
          document.getElementById("output").innerHTML=`After splice : ${newArray}`
        }}
      >
        Splice at Index 2
      </button>
      <button onClick={() => {
         document.getElementById("input").innerHTML=`Original array : ${array}`
       let p=document.getElementById("output").innerHTML="After toString method:"+array.toString()
    
      }}>ToString</button>
      <br></br>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            delete array[1]
            document.getElementById("output").innerHTML=`After Delete : ${array}`
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
          // let array2=[10,20,30]
          // array.concat(array2)
            document.getElementById("output").innerHTML=`After concat : ${array.concat(inputRef.current.value)}`
        }}
      >
        concat
      </button>
      <button
        onClick={() => {
              let b=[[10,20,30],[40,50,60]]
              document.getElementById("input").innerHTML=`Original array: ${array}`
            document.getElementById("output").innerHTML=`After Flat() method : ${b.flat()}`
        }}
      >
        Flat
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After unshift array is : ${array.unshift(1,4)}`
        }}
      >
        Slice
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`

            document.getElementById("ouput").innerHTML=`After fill() array is : ${array.fill(2410,2,4)}`
        }}
      >
        Fill
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After indexOf() array is : ${array.indexOf(3)}`
        }}
      >
        indexOf
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After Sort() array is : ${array.sort()}`
        }}
      >
        sort
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After isArray() array is : ${Array.isArray(array)}`
        }}
      >
        isArray
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After includes() array is : ${array.includes(5)}`
        }}
      >
        includes
      </button>
      <button
        onClick={() => {
          document.getElementById("input").innerHTML=`Original array : ${array}`
            document.getElementById("output").innerHTML=`After unshift array is : ${array.reverse()}`
        }}
      >
        reverse
      </button>
      
    </div>
    
  );
};

export default ArrayMethods;
