import React, { Component } from 'react';

class UVIndex extends Component {
    render() {
        return (
            <div>  
                <p>Visibility:</p>
                <p>{this.props.visibility}</p> 
                <hr/>
            </div>
        );
      }
}

export default UVIndex;