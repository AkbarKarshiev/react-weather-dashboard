import React, { Component } from 'react';

class TempVarChart extends Component {

    render() {
        const listStyle= {
            listStyle: 'none'
        };
        const temps = this.props.tempToday.map((temperature, key) => {
            return <li key={temperature.id} style={listStyle}>hour: {temperature.hour}. temperature: {temperature.temp}</li>
        });
        return (
            <div>  
                <p>Temperature information</p>
                {temps}
                <hr/>
            </div>
        );
      }
}

export default TempVarChart;