import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import CardCartoon from "./components/Card";
import Title from "./components/Title";
import cartoon from "./cartoon.json";


class App extends Component {

  state = {
    score :0,
    topscore :0,
    cartoon,
    message: "Click an image to begin"
     
  }

  RandomImages = () => {
    for (var i = this.state.cartoon.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [this.state.cartoon[i], this.state.cartoon[j]] = [this.state.cartoon[j], this.state.cartoon[i]];
    }
    return this.state.cartoon;
  }


  render(){
    
    return(
      <Wrapper>
        <Score message= {this.state.message}  score = {this.state.score} topscore={this.state.topscore}></Score>
        <Title></Title>
        <div className="container">
          <div className="row">
            {this.RandomImages(cartoon).map(cartoon =>(
                <CardCartoon          
                  name={cartoon.name}
                  image ={cartoon.image}
                  id={cartoon.id}>
                </CardCartoon>          
             ))}
          </div>
        </div>
      
        
      </Wrapper>

    );
  }
}

export default App;
