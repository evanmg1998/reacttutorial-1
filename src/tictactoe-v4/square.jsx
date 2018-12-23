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
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
      return (

        // 2 Different ways to add a javascript event function
        // 1: define the function
        // <button className="square" onClick={function() { alert('click'); }}>
        //
        // or
        //
        // 2: Use the arrow function syntax
        // <button className="square" onClick={() => { alert('click'); }}>

        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'}) }>
          {this.state.value}
        </button>
        // When you call setState in a component, 
        // React automatically updates the child components inside of it too.
      );
    }
  }
  

export default Square;