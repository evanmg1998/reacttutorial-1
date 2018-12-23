import React from 'react';

  class Intro extends React.Component {
    render() {
      return (
        <div >
            <ul>
                <li>
                    <code>
                    A React Component extends the React.Component class.
                    <br></br>
                    <br></br>

                    The "render()" method returns a single html element to
                    be displayed.  A "div" tag that surrounds the ui code is commonly
                    used.
                    <br></br>
                    <br></br>
                

                    Add the "export default CLASS" instruction at the bottom of the file, this identifies
                    the class to render. 

                    </code>
                </li>
            </ul>
        </div>
      );
    }
  }
  
export default Intro; 
  