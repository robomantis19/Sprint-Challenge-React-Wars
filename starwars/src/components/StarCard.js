import React from 'react'; 


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
    return(
        <div>

            {props.name}
            {props.birth_year} 
            {props.height} 
            {props.mass} 
            {props.skin_color}
            {props.hair_color} 
            {props.gender}
            {props.eye_color}
        {props.homeworld}
        {props.films}
        {props.species}
        {props.vehicles}
        {props.starships}
        {props.created}
        {props.edited}
        {props.url}
          
        </div>
    )
}

export default StarCard; 