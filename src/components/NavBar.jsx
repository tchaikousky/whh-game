import React from 'react';

// create loop that makes specific amount of input fields dependent upon the legnth of the phrase recieved by api call. after 1 letter is typed, auto jump to the next.

function NavBar() {
    return(
        <div className="navBar">
            <ul>
                <li><button>Home</button></li>
                <li><button>New Game</button></li>
            </ul>
        </div>
    )
}

export default NavBar;