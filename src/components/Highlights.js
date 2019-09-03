import React from 'react';
import UVIndex from './UVIndex';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const content = (props) => {
    return (
        <div>
            <UVIndex 
                persons={props.persons}
            />
            <Visibility
                persons={props.persons}
            />
            <WindStatus 
                persons={props.persons}
            />            
        </div>
    );
}

export default content;