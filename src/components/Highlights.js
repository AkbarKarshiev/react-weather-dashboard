import React from 'react';
import UVIndex from './UVIndex';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const content = (props) => {
    return (
        <div>
            <UVIndex 
                uvindex={props.highlights[0].uvIndex}
            />
            <Visibility
                visibility={props.highlights[1].visibility}
            />
            <WindStatus 
                windstatus={props.highlights[2].windstatus}
            />            
        </div>
    );
}

export default content;