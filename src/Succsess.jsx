import React, { useState } from 'react'
import img4 from './assets/img4.jpeg'
import './First.css'
import { useNavigate } from 'react-router-dom'


const container = {
  width:"350px",
    height:"440px",
    borderRadius : "15px",
    display:"flex",
    flexDirection:"column",
    boxShadow : "0px 0px 15px 0px black",
    overflow : "hidden"
}

const imgstyle = {
    objectFit : "cover",
    height : "500px"

    
}

function Succsess() {
    // alert("I love Uh Madam 🌹")
             const navigate = useNavigate();

    const handleclick =() =>{
       navigate('/next')
}

  return (
  
  
  <div>
     <h1 style={{color : "black"}}> Yayy!!</h1>
    <div style={container}>
        <img src={img4} alt="" style={imgstyle}  />
    </div>
    <h2 style={{color : "black"}}>This smile Made me fall for you 😩</h2>
    <button onClick={handleclick}>Next</button>
   
       
    </div>
  )
}

export default Succsess