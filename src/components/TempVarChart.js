import React, { Component } from 'react';

class TempVarChart extends Component {
    render() {
        return (
            <div>  
                <li>TempVarChart</li>
                <li>I'm {this.props.persons[0].name} hero</li>             
                <li>I'm {this.props.persons[1].name} hero</li> 
                <hr/>
            </div>
        );
      }
}

export default TempVarChart;