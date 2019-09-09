import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);


class UVIndex extends Component {
    state = {
        
    }
    render() {
        console.log("hey");
        return (
            <div className="highlights-item col-md-4 col-sm-6 col-xs-12 border-top">  
                <ReactFC 
                    {...this.state}/>
                {/* <p>UVIndex:</p>
                <p>{this.props.uvindex}</p>
                <hr/> */}
            </div>
        );
      }
}

export default UVIndex;