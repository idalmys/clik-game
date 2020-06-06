import React from "react";


function Card (props){
    return(
        <div className="card">
            <img alt={props.name} src ={props.image} id={props.id}
            onClick={ () => props.handleclickevent (props.id)}></img>
        </div>
    )
}

export default Card;