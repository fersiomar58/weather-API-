import axios from 'axios'
import './App.css';
import React,{useEffect, useState} from 'react';








function App() {
const [data, setData] = useState("")
const [place,setPlace ] = useState("")
console.log(data)


// const key="35bd34483c6d22bee9a1ce7674d9859c"

  const url =`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=35bd34483c6d22bee9a1ce7674d9859c`


 
 

  useEffect(() => {
    const getData=async()=>{
      try {
        const res=await axios.get(url)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
   }, )
  


  return (
    <div className='App'>
       <div className='SearchBar'>
        <form className='opensearch'>
            <input type="text"  value={place}   onChange={e=>setPlace (e.target.value)}/>
          
        </form>
    </div>
     <div className="container">
       <div className='top' >
       <div className='location' >
         <p>Dallas</p>
         <div className="temp">
           <h1>60°F</h1>
         </div>
         <div className="description">
           <p>Clounds</p>
         </div>
         </div> 
       </div>
       <div className='bottom'>
         <div className="feels">
           <p>65°F </p>
           <p>Feels Like</p>
         </div>
         <div className="humidity">
           <p>20%</p>
           <p>Humidity</p>
         </div>
         <div className="wind">
          <p> 12 MPH</p>
          <p>Speed wind</p>
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;
