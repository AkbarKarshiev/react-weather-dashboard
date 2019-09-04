import React, { Component } from 'react';

class WindStatus extends Component {
    render() {
        return (
            <div>  
                <p>WindStatus:</p>
                <p>Speed: {this.props.windstatus[0].windSpeed}</p> 
                <p>Wind Direction — {this.props.windstatus[2].derivedWindDirection}, or {this.props.windstatus[1].windDirection} degree clockwise with respect to true N as 0 degree.</p>
                <hr/>
            </div>
        );
      }
}

export default WindStatus;