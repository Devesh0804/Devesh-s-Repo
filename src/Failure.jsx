import React from 'react'
import { useNavigate } from 'react-router-dom'

const container = {
    width : "400px",
    height : "330px",
    boxShadow : "0px 0px 15px 0px black",
    borderRadius : "15px"
}






function Failure() {
   const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/')
    }
  return (
    <div>
         <div style={container}>
            <br />
            <h2 style={{color : 'black', marginTop : "25px"}}>Are You Sure ??</h2>
            <h1>😞🥺🙁</h1>
            <h3 style={{color : 'black', marginTop : "25px"}}>Think Again</h3>
            <button onClick={handleClick}>Yes</button>
         </div>
    </div>
  )
}

export default Failure