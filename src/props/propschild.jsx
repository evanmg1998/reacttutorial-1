import React  from 'react';


class PropsChild extends React.Component {

    render() {
        return (
            <div>
                I am the child class, the parent passed the following data: <br></br>
                Var 1: {this.props.var1} <br></br>
                Var 2: {this.props.var2}
            </div>

        );
    }
}

export default PropsChild;