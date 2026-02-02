import React, { useEffect, useState } from 'react'
import img5 from './assets/img5.jpeg'



const container = {
  width:"350px",
    borderRadius : "15px",
    display:"flex",
    flexDirection:"column",
    boxShadow : "0px 0px 15px 0px black",
    overflow : "hidden"
}

function Next() {
       const startDate = new Date(2022,7,6,0,0,0);  
       const [time ,seTime] = useState({
        years : 0,
        months : 0,
        days : 0,
        hours : 0,
        minutes : 0,
        seconds : 0
       });


       useEffect(()=>{
        const updatetime = () =>{
          const now = new Date();

          let years = now.getFullYear() - startDate.getFullYear();
          let months = now.getMonth() - startDate.getMonth();
          let days = now.getDate() - startDate.getDate();

       
       if(days < 0){
        months--;
        const prevMonth = new Date(now.getFullYear(),now.getMonth(), 0);
        days += prevMonth.getDate();
       }
       if(months < 0) {
        years--;
        months +=12;
       }

     const lastAnniversary = new Date(
      startDate.getFullYear() + years,
      startDate.getMonth() + months,
      startDate.getDate()
     );

     const diffMs = now - lastAnniversary;

     const hours = Math.floor(diffMs / (1000 * 60 * 60));
     const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
     const seconds = Math.floor((diffMs / 1000) % 60);


     seTime({years,months,days,hours,minutes,seconds});
 };

 updatetime();
 const interval = setInterval(updatetime,1000);
  return () =>{
    clearInterval(interval)
  }
          
        
       },[])
  return (
    <div>
         <div style={container}>
            <img src={img5} alt="" />
              </div>
            
      <div style={{color : "black "}}>
      <h2 style={{color : "black", fontSize : "15px"}}>We have been Together</h2>
      <h2 style={{color : "black" ,fontSize : "15px"}}>{time.years} years</h2>
      <h2 style={{color : "black" ,fontSize : "15px"}}>{time.months} months</h2>
      <h2 style={{color : "black" ,fontSize : "15px"}}>{time.days} days</h2> 
      <h2 style={{color : "black" ,fontSize : "15px"}}>{time.hours}h {time.minutes}m {time.seconds}s</h2>
      <h2>And Forever...</h2>     
      </div>

    
      
  

    </div>
  )
}

export default Next