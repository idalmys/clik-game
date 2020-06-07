import React from "react";
import "./title.css"

function Title(props){
    return(
        <div className="title">{props.children}</div>
    )
}

export default Title