import React, { Component } from 'react';
import './App.css';

import ReactSVG from 'react-svg'

function newGame() {
  newGameView()
  this.word = ["c", "a", "t"]
  this.guessesLeft = 8
  setBlanks( "___" )
}

class App extends Component {
  constructor(){
    this.alphabet = []
    this.word = []
    this.guessesLeft = 8
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Hangman Game</h2>
        </div>
        <div className="intro">
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          <p>There are some placeholder elements setup that need implementation.</p>
        </div>
        <div className="main">
          <ReactSVG path="hangman.svg"/>
          <div className="game-controls">
            <button onClick={this.newGame}>New Game</button>
            <div className="remaining-alphabet">{this.alphabet}</div>
            <div className="guess-left">{this.guessesLeft}</div>
            <input type="text" onChange={this.userGuess} placeholder="Guess a letter..."/>
            <div className="puzzle-word">_ _ _ _ _ _   _ _ _ _</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
