import React from 'react';
import { connect } from "react-redux";
import './index.css';
import { selectSquare, changePlayer } from "../js/actions/index";


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClick(i) {
    this.props.selectSquare({square: i, value: (this.props.xIsNext ? 'X' : 'O')});
    this.props.changePlayer();
  }

  renderSquare(i) {
      return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
      )
    }

    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    
    render() {
      const winner = this.calculateWinner(this.props.squares);

      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      selectSquare: arg => dispatch(selectSquare(arg)),
      changePlayer: () => dispatch(changePlayer())
    };
  }

  // Maps the reducer state to class props
  const mapStateToProps = state => {
    console.log('LOG-Board.jsx', state);
    return { 
      squares: state.boardReducer.squares,
      xIsNext: state.gameReducer.xIsNext   
    };
;
  };


  export default connect(mapStateToProps, mapDispatchToProps)(Board);