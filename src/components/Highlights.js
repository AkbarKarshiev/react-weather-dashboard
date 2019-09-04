import React from 'react';
import UVIndex from './UVIndex';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const content = (props) => {
    return (
        <div>
            <UVIndex 
                uvindex={props.highlights[0].uvindex}
            />
            <Visibility
                visibility={props.highlights[2].visibility}
            />
            <WindStatus 
                windstatus={props.highlights[1].windstatus}
            />            
        </div>
    );
}

export default content;