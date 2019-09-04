import React from 'react';
import TempVarChart from './TempVarChart';
import Highlights from './Highlights';

const content = (props) => {
    return (
        <div>
            <p><b>This is Content component</b></p>
            <hr/>
            <TempVarChart
                tempVar={props.weather_data[1].temperature[0]}
            />
            <Highlights
                highlights={props.weather_data[2].highlights}
            />
            
        </div>
    );
}

export default content;