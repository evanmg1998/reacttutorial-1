import React from 'react';
import './index.css';
import Intro from './intro/intro';
import PropsIntro from './props/propsintro';
import TicTacToe1 from './tictactoe-v1/index';
import TicTacToe2 from './tictactoe-v2/index';
import TicTacToe3 from './tictactoe-v3/index';
import TicTacToe4 from './tictactoe-v4/index';
import TicTacToe5 from './tictactoe-v5/index';
import TicTacToe6 from './tictactoe-v6/index';
import TicTacToe7 from './tictactoe-v7/index';

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
        switch (param) {
           case 1:
              return <Intro></Intro>   
            case 2:
              return <PropsIntro/>   
            case 3:
              return <TicTacToe1/>
            case 4:
              return <TicTacToe2/>
            case 5:
              return <TicTacToe3/>
            case 6:
              return <TicTacToe4/>
            case 7:
              return <TicTacToe5/>
            case 8:
              return <TicTacToe6/>
            case 9:
              return <TicTacToe7/>
        }
     }
    render() {
      return (
        <div >        

            <ul>
                <li>
                    <a  href="#" onClick={() => this.updateCount(1)}>
                    React Basic Intro
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(2)}>
                    React Basic Props Intro
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(3)}>
                    Tic-Tac-Toe v1
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(4)}>
                    Tic-Tac-Toe v2
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(5)}>
                    Tic-Tac-Toe v3
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(6)}>
                    Tic-Tac-Toe v4
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(7)}>
                    Tic-Tac-Toe v5
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(8)}>
                    Tic-Tac-Toe v6
                    </a>
                </li>
                <li>
                    <a  href="#" onClick={() => this.updateCount(9)}>
                    Tic-Tac-Toe v7
                    </a>
                </li>
            </ul>
            <button
                  onClick={() => this.updateCount()}
                >
                  Clicked {this.state.count} times
                </button>);


          <hr></hr>
          {this.mySwitchFunction(this.state.count)}
        
        </div>
      );
    }
  }
  
export default Base; 
  