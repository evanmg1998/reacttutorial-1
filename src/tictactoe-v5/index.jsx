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
          TIC TAC TOE Tutorial - Version 5
          <br></br>
          <br></br>
          Goal: Now that we can track state, add state to the board so all square values
          can be known at one time.
          
            <hr></hr>
            <Game></Game>
      </div>
    );
  }
} 
    
export default TicTacToe; 
  