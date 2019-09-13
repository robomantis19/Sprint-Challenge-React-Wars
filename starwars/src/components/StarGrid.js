import React, {useState, useEffect} from 'react'; 
import style from 'styled-components';
import axios from 'axios';

const Card = style.div`
   width: 300px;
   height: 500px;
   background-color: papayawhip;
   margin-bottom: 25%;
   padding-top: 10%; 
   text-shadow: 0 5px 10px #777;
   box-shadow: 0 5px 10px #777;

`
const H2tag = style.div`
    font-size: 1.4rem;
    width: 80%;
    border-bottom: 2px solid black;
`
const Ptags = style.div`
   font-size: 1.4rem;
   margin-top: 20%;

`
const StarGrid = function(props){
    const [homeworld2, setHomeworld] = useState([])
    useEffect(()=>{
        axios.get(props.homeworld)
        .then(res => { 
            console.log("home world data: ",res.data)
            const world = res.data.name;
            setHomeworld(world)
        })
        .catch(err => { 
            console.log('home world err: ', err)
        })
    },[props.homeworld])


    return (
        <div>
            <Card>
              <H2tag>
                <h2> {props.name}</h2>
              </H2tag>
              <Ptags>
                <p> Birth Date: {props.Bdate}</p>
                <p> Gender: {props.gender}</p>
                <p> eye color:  {props.eyeColor}</p>
                <p> Mass: {props.mass}</p>
                <p> Home World: {homeworld2}</p>
              </Ptags>
            </Card>

        </div>
    )
}

export default StarGrid;