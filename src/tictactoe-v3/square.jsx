import React from 'react';
import './index.css';

class Square extends React.Component {

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

        <button className="square" onClick={() => { alert('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }
  

export default Square;