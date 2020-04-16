import React from 'react';
import GameTile from './GameTile.jsx';
import GuessInput from './GuessInput.jsx';
import { Component } from 'react';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: this.props.gameBoard,
            gameTile1: this.props.gameBoard.image1,
            gameTile2: this.props.gameBoard.image2,
            gameTile3: this.props.gameBoard.image3,
            solution: this.props.gameBoard.solution
        }
    }

    render() {
        return(
            <div>
                <GameTile gameTile={this.state.gameTile1} />
                <GameTile gameTile={this.state.gameTile2} />
                <GameTile gameTile={this.state.gameTile3} />
                <GuessInput solution={this.state.solution} />
            </div>
        )
    }
}

export default GameBoard;