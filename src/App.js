import React, { Component } from 'react';
import GameBoard from './components/GameBoard.jsx';
import NavBar from './components/NavBar.jsx';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    let gameStarted;
    console.log(this.state.gameBoard)
    if(this.state.gameBoard.length > 0) {
      gameStarted = <GameBoard gameBoard={this.state.gameBoard[0][39]}/>
    }

    return (
      <div className="homepage">
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <button type="submit" >Play</button>
        </form>
        <div className="App">
          {gameStarted}
        </div>
      </div>
    );
  };
};

export default App;
