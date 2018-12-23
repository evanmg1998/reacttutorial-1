import React from 'react';
import './index.css';

/*
React components can have state by setting this.state in their constructors. 
this.state should be considered as private to a React component that it’s defined in. 
Let’s store the current value of the Square in this.state, and change it when the Square is clicked.

Note
In JavaScript classes, you need to always call super when defining the constructor of a subclass. 
All React component classes that have a constructor should start it with a super(props) call.
*/

class Square extends React.Component {

  render() {
      return (

        <button 
          className="square" 
          onClick={() => this.props.onClick() }>
          {this.props.value}
        </button>
      );
    }
  }
  

export default Square;