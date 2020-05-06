import React, { Component } from 'react';
import GameBoard from './components/GameBoard.jsx';
import NavBar from './components/NavBar.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [],
      gameCount: 0,
      nextClicked: false,
      inputValue: "",
      score: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getData = async () => {
    const response = await fetch(`https://whatshappeninghere.herokuapp.com/`);
    const data = await response.json();
    return data;
  }

  async handleSubmit(event) {
    event.preventDefault();

    const data = await this.getData();

    this.setState({
      gameBoard: [...this.state.gameBoard, data]
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleNext(event) {
    event.preventDefault();
    let form = document.getElementById("inputSubmit")
    this.setState(prevState => {
      if(this.state.inputValue === this.state.gameBoard[0][this.state.gameCount].solution) { 
        const updatedCount = prevState.gameCount + 1;
        const newScore = prevState.score + 10;
        form.reset();
        this.forceUpdate();
        return {
          gameCount: updatedCount,
          nextClicked: true,
          score: newScore
        }
        
      }else {
        const newScore = prevState.score - 5;
        form.reset();
        return {
          score: newScore
        }
      }
      
    })
    
  }

  handleKeyPress(event) {
    
    if(event.key === 'Enter') {
      this.handleNext(event);
    }else {
      this.handleChange(event);
    }
  }
  render() {
    let gameStarted;
    let inputField;
    let nextButton;
    let score;
    
    if (this.state.gameBoard.length > 0 && this.state.gameCount % 1 === 0) {
      
      if(this.state.gameCount > this.state.gameBoard[0].length - 2) {
        gameStarted = <h1>Congratulations</h1>
        inputField = <h3>Your have completed the game.</h3>
        score = <h3>Final Score: {this.state.score}</h3>
        nextButton = <button type="button">home</button>
        
      } else {
        score = <h3>Score: {this.state.score}</h3>
        gameStarted = <GameBoard gameBoard={this.state.gameBoard[0][this.state.gameCount]} nextClicked={this.state.nextClicked} />
        inputField = <input type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} ></input>
        nextButton = <button type="submit" onClick={this.handleNext}>Next</button>
      }
    }

    return (
      <div className="homepage">
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onSubmit={this.handleSubmit} >Play</button>
        </form>
        <div className="appContainer">
            {score}
          <div className="App">
            {gameStarted}
            <form id="inputSubmit">
              {inputField}
              {nextButton}
            </form>
            
          </div>
        </div>
      </div>
    );
  };
};

export default App;
