import React from 'react';
import TempVarChart from './TempVarChart';
import Highlights from './Highlights';

const content = (props) => {
    return (
        <div>
            <p><b>This is Content component</b></p>
            <hr/>
            <TempVarChart
                tempToday={props.tempToday}
            />
            <Highlights
                highlights={props.highlights}
            />
            
        </div>
    );
}

export default content;