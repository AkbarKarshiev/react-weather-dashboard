import React from 'react';
import windSpeed from '../assets/windspeed.svg';
import windDirection from '../assets/winddirection.svg';

const windStatus = (props) => {
    const winddirection = props.windstatus[2].derivedWindDirection.toString();
    const windspeed = props.windstatus[0].windSpeed.toString();
    return (
        <div className="highlights-item col-md-4 col-sm-6 col-xs-12 border-top">
            <div>
                <div className="card-heading pt-5">Wind Status</div>
                <div className="row pt-4 mt-4">
                    <div className="col-sm-6 col-md-6 mt-2 text-center align-middle">
                        <p className="card-sub-heading mt-3">Wind Direction</p>
                        <p className="mt-4"><img src={windDirection} height="40" width="40" alt="wind direction"/></p>
                        <p className="card-value mt-4">{winddirection}</p>
                    </div>
                    <div className="col-sm-6 col-md-6 mt-2">
                        <p className="card-sub-heading mt-3">Wind Speed</p>
                        <p className="mt-4"><img src={windSpeed} height="40" width="40" alt="wind speed"/></p>
                        <p className="card-value mt-4">{windspeed} km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default windStatus;