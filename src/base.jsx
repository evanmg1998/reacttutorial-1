import React from 'react';
import './index.css';
import Intro from './intro/intro';
import PropsIntro from './props/propsintro';
import TicTacToe from './tictactoe/index';

  class Base extends React.Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }

      updateCount(newCount = 0) {
        this.setState((prevState, props) => {
          return { count: newCount }
        });
      }
    
    mySwitchFunction = (param) => {
      return <TicTacToe/>        
     }

    render() {
      return (
        <div >        

          {this.mySwitchFunction(this.state.count)}
        
        </div>
      );
    }
  }
  
export default Base; 
  