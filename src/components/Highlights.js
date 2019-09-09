import React from 'react';
import UVIndex from './UVIndex';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const content = (props) => {
    return (

        <div className="custom-content-card content-card card">
          <div className="card-body pb-0">
            <div className="content-header h4 text-center pt-2 pb-3" >Highlights</div>
                <div className="row">
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
          </div>
      </div>
    );
}

export default content;