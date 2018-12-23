import React from 'react';
import PropsChild from './propschild';

class PropsParent extends React.Component {

    render() {
        return(
            <div>
                This code came from the Parent class.
                <br></br>
                <br></br>
                <PropsChild var1='Hello' var2='5'/>
            </div>
        );
    }
}

export default PropsParent;