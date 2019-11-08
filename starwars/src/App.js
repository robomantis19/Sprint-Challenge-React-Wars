import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarCard from './components/StarCard'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [wars, setWars] = useState([]);

  useEffect(()=>{
    axios.get(`https://swapi.co/api/people/`)
    .then(res => { 
      console.log(res)
      setWars(res.data.results); 
    })
    .catch(err =>  {
      console.log(err); 
    })
  },[])
  return (
    <div className="App">
      {wars.map((item, index) => { 
        return(
          <StarCard 
          name = {item.name}
          birth_year ={item.birth_year}
          height ={item.height}
          mass ={item.mass} 
          hair_color = {item.hair_color} 
          skin_color={item.skin_color} 
          eye_color={item.eye_color} 
          gender={item.gender} 
          homeworld={item.homeworld} 
          films ={item.films} 
          species={item.species} 
          vehicles={item.vehicles} 
          starships={item.starships} 
          created={item.created} 
          edited={item.edited} 
          url={item.url}
          />
        )
      })}
    </div>
  );
}

export default App;
