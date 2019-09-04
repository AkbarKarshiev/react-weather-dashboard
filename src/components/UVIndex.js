import React, { Component } from 'react';

class UVIndex extends Component {
    render() {
        console.log(this.props);
        return (
            <div>  
                <p>UVIndex:</p>
                <p>{this.props.uvindex}</p>
                <hr/>
            </div>
        );
      }
}

export default UVIndex;