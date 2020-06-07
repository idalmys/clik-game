import React from "react";
import "./scores.css"


function Score (props){
    return(
        <nav class="navbar navbar-expand-sm bg-info navbar-light">
            <a class="navbar-brand" href="/">Clicky Game</a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                {props.message}
            </li>
            <li class="nav-item">
               Score: {props.score} | Top Score: {props.topscore}
            </li>
        </ul>
      </nav>        
        
    )
}

export default Score;
