import React,{useState, useEffect} from 'react'; 
// import { Button, Fade } from 'reactstrap';
import styled from 'styled-components'

const Card = styled.div`
    width: 250px;
    height: 500px; 
    background: #f4a460; 
    display: flex;
    flex-direction: column; 
    justify-content: space-evenly;
    margin-bottom: 50px;
`
function StarCard(props) {
    // const {name, 
    //     birth_year, 
    //     height, 
    //     mass, 
    //     hair_color, 
    //     skin_color,
    //     eye_color, 
    //     gender,
    //     homeworld,
    //     films, 
    //     species,
    //     vehicles, 
    //     starships, 
    //     created,
    //     edited,
    //     url} = props
    
        
    
    // function TrooperDeck(){
    //     return <div>
    //         <h2>{props.name}</h2>
    //         <h3>{props.birth_year}</h3> 
    //     {props.height} 
    //     {props.mass} 
    //     {props.skin_color}
    //     {props.hair_color} 
    //     {props.gender}
    //     {props.eye_color}
    // {/* {props.homeworld} */}
    // {/* {props.films} */}
    // {/* {props.species} */}
    // {/* {props.vehicles} */}
    // {/* {props.starships} */}
    // {/* {props.created}
    // {props.edited} */}
    // {/* {props.url} */}
    // </div>
    // }
    // const [fadeIn, setFadeIn] = useState(true);

    // const toggle = () => setFadeIn(!fadeIn);
    return(
        <div>
            {/* <div>
                <Button color="primary" onClick={toggle}>Toggle Fade</Button>
                <Fade in={fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
            </div> */}
            
            {/* {TrooperDeck()} */}
                <Card>
                    <h2 style={{border: `2px dashed black`, height: `100px`}}>Name: {props.name}</h2>
                    <h4>BirthDate: {props.birth_year}</h4> 
                    <h4>Height: {props.height} </h4>
                    <h4>Mass: {props.mass} </h4>
                    <h4>Skin_Color: {props.skin_color} </h4>
                    <h4>Hair_Color: {props.hair_color} </h4>
                    <h4>Gender: {props.gender} </h4>
                    <h4>eye_color: {props.eye_color} </h4>
                    

                         
                        
                         
                        
                        
                        {/* {props.homeworld} */}
                        {/* {props.films} */}
                        {/* {props.species} */}
                        {/* {props.vehicles} */}
                        {/* {props.starships} */}
                        {/* {props.created}
                        {props.edited} */}
                        {/* {props.url} */}
                </Card>
            
          
        </div>
    )
}

export default StarCard; 