import React from "react";
import "./scores.css"


function Score (props){
    return(
        <div className="score">
            <h2> score: {props.score}    |    topscore: {props.topscore} </h2>
        </div>
    )
}

export default Score;
