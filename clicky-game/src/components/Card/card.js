import React from "react";
import "./card.css"


function CardCartoon (props){
    return(
        <div className="col-md-4 mt-4">
            <div className="card">
                <img alt={props.name} src ={props.image} id={props.id} 
                onClick={ () => props.handleclickevent (props.id)}></img>
            </div>
        </div>                 
    )
}

export default CardCartoon;