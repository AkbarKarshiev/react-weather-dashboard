import React from 'react';
import TempVarChart from './TempVarChart';
import Highlights from './Highlights';

const content = (props) => {
    return (
        <div>
            <TempVarChart
                persons={props.persons}
            />
            <Highlights
                persons={props.persons}
            />
        </div>
    );
}

export default content;