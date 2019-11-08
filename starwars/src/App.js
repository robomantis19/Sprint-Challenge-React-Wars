import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarCard from './components/StarCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Fade } from 'reactstrap';
const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [page, setPage] = useState(1); 
  const [wars, setWars] = useState([]);
  if(page == 9){
    setPage(0);
  }

  useEffect(()=>{
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(res => { 
      console.log(res)
      setFadeIn(true)
      setWars(res.data.results); 
    })
    .catch(err =>  {
      console.log(err); 
    })
  },[page])

  const [fadeIn, setFadeIn] = useState(true);
  

  
  const toggle = () => (setPage(page+1),setFadeIn(!fadeIn));
  const [showMessage, setShowMessage] = useState(false)
  console.log("page: ", page)
  return (
    <div className="App" >
      <Button color="primary" onClick={toggle} >Toggle Fade</Button>
                <Fade style={{display:`flex`,justifyContent:`space-between`,  flexWrap:`wrap`}} in={fadeIn} tag="h5" className="mt-3">
                {wars.map((item, index) => { 
                  return(
                    <StarCard 
                    key={index}
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
                </Fade>
      {/* {testing()} */}
      <div>
        <label htmlFor="toggle">Show Message</label>
        <input
          id="toggle"
          type="checkbox"
          onChange={e => setShowMessage(e.target.checked)}
          checked={showMessage}
        />
        <h2>{showMessage ? props.children : null}</h2>
      </div>
      
    </div>
  );
}

export default App;
