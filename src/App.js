//Traditional minesweeper game where user clicks on cells in an attempt to avoid 'mines'
//There are 10 mines, the aim is to reveal all the cells without any mines and flag those with mines
//If a mine is clicked, the game is over.

import React, { Component } from 'react';
import './index.css'
import Board from './Components/Board/board';
import Head from './Components/Head/head';
import Help from './Components/Help/help';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameStatus: "waiting", // can be running, waiting, or ended
      time: 0, // time is formatted in 'head.js'
      flagCount: 10,
      openCells: 0,
      mines: 10,
      rows: 10,
      columns: 10
    };

    this.baseState = this.state;
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.gameStatus === "running") {
      this.checkForWinner();
    }
  }


  checkForWinner = () => {
    if (this.state.mines + this.state.openCells >= this.state.rows * this.state.columns) {
      this.setState({
        gameStatus: "winner"
      }, alert("you won!"))
    }
  }

  componentWillMount() {
    this.intervals = [];
  }

  setInterval = (fn, t) => {
    this.intervals.push(setInterval(fn, t));
  };

  reset = () => {
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState), () => {
      this.intervals = [];
    });
  };

  tick = () => {
    if (this.state.openCells > 0 && this.state.gameStatus === "running") {
      let time = this.state.time + 1;
      this.setState({ time });
    }
  };

  endGame = () => {
    this.setState({
      gameStatus: "ended"
    }, alert("You lost"));
  };

  changeFlagAmount = amount => {
    this.setState({ flagCount: this.state.flagCount + amount });
  };

  handleCellClick = () => {
    if (this.state.openCells === 0 && this.state.gameStatus !== "running") {
      this.setState(
        {
          gameStatus: "running"
        },
        this.setInterval(this.tick, 1000)
      );
    }
    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    });
  };

  render() {
    return (
      <div className="main">
        <Help />
        <div className="minesweeper">
          <h1>Welcome to minesweeper.</h1>
          <Head
            time={this.state.time}
            flagsUsed={this.state.flagCount}
            reset={this.reset}
            status={this.state.gameStatus}
          />
          <Board
            openCells={this.state.openCells}
            mines={this.state.mines}
            rows={this.state.rows}
            columns={this.state.columns}
            endGame={this.endGame}
            status={this.state.gameStatus}
            onCellClick={this.handleCellClick}
            changeFlagAmount={this.changeFlagAmount}
          />
        </div>
      </div>
    );
  }
}

export default App;
