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
    alert: "Click an image to begin",
    clicked:[]
     
  }

  RandomImages = () => {
    for (var i = this.state.cartoon.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [this.state.cartoon[i], this.state.cartoon[j]] = [this.state.cartoon[j], this.state.cartoon[i]];
    }
    return this.state.cartoon;
  }

  handleClickEvent = (id) => {

    var clicked = this.state.clicked;
    if (clicked.indexOf(id) === -1) {
      this.setState({
        clicked: clicked.concat(id),
        score: this.state.score + 1,
        topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore,
        alert: "You guessed correctly!!!!" 
      })
     this.RandomImages()
     
    }
    else {
      this.setState({
        alert: "You guessed incorrectly!!!!!",
        score: 0,
        clicked: []
      })
    }
  }
  render(){
    
    return(
      <Wrapper>
        <Score alert= {this.state.alert}  score = {this.state.score} topscore={this.state.topscore}></Score>
        <Title>
        Click on a character to earn points.

        Don't click on any more than once or the game will reset!
        </Title>
        <div className="container">
          <div className="row">
            {this.RandomImages(cartoon).map(cartoon =>(
                <CardCartoon  
                  id={cartoon.id}
                  name={cartoon.name}
                  image ={cartoon.image}
                  handleClickEvent={this.handleClickEvent}>

                </CardCartoon>          
             ))}
          </div>
        </div>
               
      </Wrapper>
      

    );
  }
}

export default App;
