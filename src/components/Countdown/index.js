import React, {useState, useEffect} from 'react'

const Countdown = () => {
  const [days, setDays] = useState('0')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [timeUp, setTimeUp] = useState(false)
 
  const dayString = days > 1 ? 'days' : 'day';
  useEffect(() =>  {
    setInterval(() => {
       let eventDate =+ new Date(`10/08/2022`);
       let difference = eventDate -+ new Date();
       if (difference < 1) {
          setTimeUp({timeUp: true});
       } else {
          let days = Math.floor(difference / (1000 * 60 * 60 * 24));
          let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          let minutes = Math.floor((difference / (1000 * 60)) % 60);
          let seconds = Math.floor((difference / (1000)) % 60);
          setHours(hours > 9 ? hours : `0${hours}`)
          setMinutes(minutes > 9 ? minutes : `0${minutes}`)
          setSeconds(seconds > 9 ? seconds : `0${seconds}`)
          setDays(days)
       }
    }, 1000)
 },[])

  return (
       timeUp ?
         <p>Event in progress</p> 
         :
         <div className="countdown">
            <div>
              <h1>{`${days}`}</h1>
              <p>Days</p>
            </div>

            <div>
              <h1>{`${hours}`}</h1>
              <p>Hours</p>
            </div>

            <div>
              <h1>{`${minutes}`}</h1>
              <p>Minutes</p>
            </div>

            <div>
              <h1>{`${seconds}`}</h1>
              <p>Secondes</p>
            </div> 
         </div>
  );  
}

export default Countdown