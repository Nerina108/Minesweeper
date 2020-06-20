//Component displays the instructions for the game when the help button is clicked

import React, { Component } from 'react';

class Help extends Component {
    instructions() {
        alert("Click on cells to reveal numbers. Try to reveal as many numbers as possible whilst avoiding clicking on mines.  Once a mine is clicked the game is over and the happy face becomes sad.  Possible mines can be flagged by right-clicking on them.  If you are able to locate all 10 mines without clicking on them you win! Good Luck! P.S. Click on the smiley face to restart the game.")
    }

    render() {
        return (
            <button className="help" onClick={this.instructions}>Help</button>
        );
    }
}

export default Help;