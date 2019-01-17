import React from 'react';
//import ReactDOM from 'react-dom';


class Square extends React.Component {
    render(){
        return(
            <button className ="square" name={this.props.name}>
                {this.props.name}
            </button>
        );
    }
}
export default Square;