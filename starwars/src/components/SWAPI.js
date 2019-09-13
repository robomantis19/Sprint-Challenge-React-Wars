import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import StarGrid from './StarGrid';
const SWAPI = function(){
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(res => {
            console.log("people: " , res.data.results);
            const characters = res.data.results;
            setPeople(characters)
        })
        .catch(err => { 
            console.log("people err: " , err);
        })
    },[])
  


   return (

       <div>


       </div>
   )


}

export default SWAPI;