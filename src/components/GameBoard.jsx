import React from 'react';
import GameTile from './GameTile.jsx';
import GuessInput from './GuessInput.jsx';
import { Component } from 'react';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: this.props.gameBoard
        }   
    }

    render() {
        console.log(this.props.gameBoard)
        return(
            <div>
                <GameTile gameTile={this.props.gameBoard.image1} />
                <GameTile gameTile={this.props.gameBoard.image2} />
                <GameTile gameTile={this.props.gameBoard.image3} />
                <GuessInput solution={this.props.gameBoard.solution} />
            </div>
        )
    }
}

export default GameBoard;