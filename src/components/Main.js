import React from 'react'
import Card from './Card';
import Footer from './Footer';
import { useState,useEffect } from 'react';

function Main() {
  let [user,setuser]=useState([])
  
 useEffect(
  ()=>{
    fetch('https://fakestoreapi.com/products')
    .then(re=>re.json())
    .then((re1)=>
      {
        setuser(re1)
        console.log(re1)
      }
      )
    .catch(res=>console.log(res))
  }
  ,[])
  
 
  

  let [filtereditem,setFilter]=useState([])
  function HandleInput(e)
  {
    let b=e.target.value
   
    let filteritem=user.filter((obj)=>
      obj.title.includes(b)
    )
    setFilter(filteritem)
    console.log(filteritem)
  }
 
 

 
  return (

   <div style={{padding:"0px",margin:"0px"}}>
    <div className='w-50 text-center d-block mx-auto m-5'>
       
        <input type="text" id="search" className='w-75' placeholder="search by title" onChange={HandleInput}></input>
       <lable id="search" ><img src="https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=" alt="" width="60" height="60"/></lable> </div>
       { filtereditem.length===0 ?
        <div className='container' >
         <div className='row g-3' >
          {
            user.map((userObj)=>
              <Card data={userObj}/>
            )}
       
         </div>
        </div>
        :
        <div className='container' >
        <div className='row g-3' >
         {
           filtereditem.map((userObj)=>
           <Card data={userObj}/>
         
             
           
           )
         }
      
        </div>
       </div>
        

}
       
        </div>
        
   
  )
        }

export default Main