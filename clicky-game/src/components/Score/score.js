import React from "react";
import "./scores.css"


function Score (props){
    return(
        <div className="score">
            <h2>   message : {props.message} score: {props.score}    |    topscore: {props.topscore} </h2>
        </div>
    )
}

export default Score;
