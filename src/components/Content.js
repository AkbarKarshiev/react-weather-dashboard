import React from 'react';

const content = (props) => {
    return (
        <div>
            <p>{props.highlights}</p>
            <p>{props.tempVar}</p>
        </div>
    );
}

export default content;