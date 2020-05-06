import React from 'react';
import GameTile from './GameTile.jsx';
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
            <div className="gameBoard">
                <div className="tile1">
                    <GameTile gameTile={this.props.gameBoard.image1} />
                </div>
                <div className="tile2">
                    <GameTile gameTile={this.props.gameBoard.image2} />
                </div>
                <div className="tile3">
                    <GameTile gameTile={this.props.gameBoard.image3} />    
                </div>
            </div>
        )
    }
}

export default GameBoard;