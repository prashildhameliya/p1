import { useEffect, useState } from "react";

function ClockFun(props) {
  const[time,settime] = useState(new Date());

  const tick = () =>{
    settime (new Date());
  }
    useEffect (
      () => {
        const timeid = setInterval(() => tick() , 1000);

        return () => {
          clearInterval (timeid);
        }
      },
    [time])
  
  return (
    <div>
      { time.toLocaleTimeString()}
      
    </div>
  );
}

export default ClockFun;
