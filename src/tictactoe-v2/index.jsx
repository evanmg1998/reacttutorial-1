import React from 'react';
import Game from './game';
import './index.css';

class TicTacToe extends React.Component {
  render() {
    return (
      <div>
          <a href="https://reactjs.org/tutorial/tutorial.html#what-is-react">
          React JS Tutorial
          </a>
          <br></br>
          TIC TAC TOE Tutorial - Version 2
          <br></br>
           Goal:  Add numbers to all squares by adding properties. 
            <hr></hr>
            <Game></Game>
      </div>
    );
  }
} 
    
export default TicTacToe; 
  