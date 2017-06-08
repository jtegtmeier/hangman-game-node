import React, { Component } from 'react';
import './App.css';

import ReactSVG from 'react-svg'

function newGame() {
  newGameView()
  this.word = ["c", "a", "t"]
  this.guesses = 8
  setBlanks( "___" )
}

class App extends Component {
  constructor(){
    this.alphabet = []
    this.phrase = []
    this.guess = []
    this.numTries = 0
    this.maxTries = 8
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
            <button>New Game</button>
            <div className="remaining-alphabet">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
            <input type="text" placeholder="Guess a letter..."/>
            <div className="puzzle-word">_ _ _ _ _ _   _ _ _ _</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
