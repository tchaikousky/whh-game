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
      nextClicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);
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

  handleNext() {
    this.setState(prevState => {
      // LOOK HERE: dirty fix, need to clean up later
      if(this.state.gameCount < this.state.gameBoard[0].length - 1) {
        const updatedCount = prevState.gameCount += .5;
        
        return {
          gameCount: updatedCount,
          nextClicked: true
        }
      }
    })
  }

  render() {
    let gameStarted;

    if(this.state.gameBoard.length > 0) {
      gameStarted = <GameBoard gameBoard={this.state.gameBoard[0][this.state.gameCount]} nextClicked={this.state.nextClicked} />
    }

    return (
      <div className="homepage">
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onSubmit={this.handleSubmit} >Play</button>
        </form>
        <button type="submit" onClick={this.handleNext}>Next</button>
        <div className="App">
          {gameStarted}
        </div>
      </div>
    );
  };
};

export default App;
