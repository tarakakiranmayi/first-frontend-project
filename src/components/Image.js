import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
function Image() {
    let [user,setUser]=useState([])
    let location=useLocation();
    const {state}=useLocation()
    let arr=location.pathname.split("/")
    let objid=arr.splice(-1)
    fetch(`https://fakestoreapi.com/products/${objid}`)
    .then(res=>res.json())
    .then(res1=>setUser(res1))
    .catch(err=>console.log(err))

 
    
  return (
    <div   className=' col-lg-12 ' >
   
    <div className='card h-100 d-flex flex-row w-100 shadow-lg'>
     <div className='card-image col-6 m-2'>
       <img src={user.image}  alt="" height="240px" style={{width:'100%',padding:'12px'}}></img>
       </div>
     
       <div className='card-body col-6 ' style={{}}>
   
       
       <h6 className='card-title ' style={{fontSize:'17px'}}>
       {
         user.title
       }
     </h6>
    
    
           
   
     <div style={{position:"relative",display:"flex",margin:"3px"}} >
    <img src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-tag-icon-png-image_4074794.jpg"alt="" width="30" height="30"/>
    <p className=' border-3 text-black  border-rounded m-1  text-center ' style={{height:"50",position:"absolute",bottom:"0.data.2px",left:"18px"}}>
     {
       user.category
     }
    </p>
    
    </div>
    
    <div  style={{justifyContent:"space-around",display:"flex",flexDirection:"column"}}>
     <h3 className='text-danger text-end'  >${user.price}</h3>
    
    </div>
      <div className='card-footer'>
      <button className='btn btn-success d-block mx-auto'   >ADD CART</button>
      </div>
         </div>
     

   </div>
   
   </div>

  )
}

export default Image