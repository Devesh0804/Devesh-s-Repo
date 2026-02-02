import React, { useState } from 'react'
import './First.css'
import img from './assets/img3.jpg'
import { useNavigate } from 'react-router-dom';






const  btnStyleNo= {
   
   

}

const img1 = img;
 




function First() {
    const navigate = useNavigate();
       const [position , setPosition] = useState({top : "72%" , left: "%"}) 
    
    

       const moveMouse = () =>{
    let x = Math.random();
     x = Math.ceil(x)  + Math.random() * 50+ "%"
    let y = Math.random();
    y =  Math.ceil(y) + Math.random() * 30 + "%"
    
        console.log(x);

    console.log(y);
       setPosition({top : x , left : y})
       
}
   
  
const handleClick = () =>{
   navigate('/success')
}

const handleFailure = () =>{
  navigate('/failure')
}
  return (
    <div>
          <div className='container'>
            <img src={img1} className='img1Style'  alt="" />
            <h2 style={{color:"black", placeItems:"center"}}>Hello Gouruuu will you be my valentine ❤️ </h2>
            <button className='btnStyle'onClick={handleClick}>yes</button>
             
             <button  style={ {width:"100px",
                        backgroundColor:"white",
                       color:"black",
                    border:"1px solid black", 
                    marginLeft:"142px",
                      marginTop: "15px",
                      position: "absolute",
                      top : position.top,
                      left : position.left,
                      transition : "0.2s"}} onMouseOver={moveMouse} onClick={handleFailure}>No</button>
            
          </div>
    </div>
  )
}

export default First