import React, { Component } from 'react';

class TempVarChart extends Component {
    render() {
        return (
            <div>  
                <p>Temperature information</p>
                <p>{this.props.tempVar.current}</p>            
                <hr/>
            </div>
        );
      }
}

export default TempVarChart;