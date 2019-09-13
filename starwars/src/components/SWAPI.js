import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import StarGrid from './StarGrid';
import style from 'styled-components'; 

const CardContain = style.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10%;


`





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
           <CardContain>
           {people.map((item, key) => {
               return (
               <StarGrid key={key} 
               name={item.name} 
               Bdate = {item.birth_year} 
               eyeColor = {item.eye_color}
               mass = {item.mass}
               homeworld = {item.homeworld}
               gender = {item.gender}/>
               )
            })}
            </CardContain>
       </div>
   )


}

export default SWAPI;