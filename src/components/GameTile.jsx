import React from 'react';

const GameTile = props => {
    
    console.log(props.gameTile)
    return(
        <div className="gameTile">
            <img src={process.env.PUBLIC_URL + props.gameTile} alt="example tile" />
        </div>
    )
}

export default GameTile;