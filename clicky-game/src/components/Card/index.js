import React from "react";
import "./card.css"


function CardCartoon (props){
    return(
        <div className="col-md-4 mt-4">
            <div className="card">
            <img alt={props.name} src={props.image}  onClick={() => props.handleClickEvent(props.id)}/>
            </div>
        </div>                 
    )
}

export default CardCartoon;