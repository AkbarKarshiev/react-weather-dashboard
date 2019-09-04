import React, { Component } from 'react';

class WindStatus extends Component {
    render() {
        console.log(this.props.windstatus)
        return (
            <div>  
                <p>WindStatus:</p>
                <li>Speed: {this.props.windstatus[0].speed}</li> 
                <li>Direction: {this.props.windstatus[1].direction}</li> 
                <hr/>
            </div>
        );
      }
}

export default WindStatus;