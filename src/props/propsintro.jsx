import React from 'react';
import PropsParent from './propsparent';

  class PropsIntro extends React.Component {
    render() {
      return (
        <div >
          A parent react component can pass data to a child.
          <br></br>

          When calling the child class, create any property variable names with data.

          The child can access this data with the this.props.PROPNAME.
          <br></br>
          <br></br>
          Example included below (Look at the source code for more details)
          <br></br>
          <br></br>
          <PropsParent/>
        </div>
      );
    }
  }
  
export default PropsIntro; 
  