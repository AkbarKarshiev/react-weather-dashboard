import React, {Component} from 'react';
import './App.css';
import Content from '../components/Content';

class App extends Component {
  state = {
    weatherDetails: false,
    location: '', // raw location from input
    lat: '41.2995', // raw latitude from google maps api response
    long: '69.2401', // raw longitude from google maps api response
    completeWeatherApi: '', // weather api string with lat and long
    rawWeatherData: '', // raw response from weather api
    currentWeather: [
      { full_location: 'New York, NY, USA' }, // for full address
      { formatted_lat: '40.7128°N' }, // for N/S
      { formatted_long: '74.005°W' }, // for E/W
      { time: 'Thu, Aug 12, 2019 4:21 AM' },
      { temp: '30' },
      { todayHighLow: [
        { todayTempHigh: '39' },
        { todayTempHighTime: '2:00 pm' },
        { todayTempLow: '20' },
        { todayTempLowTime: '7:00 am' }
      ]},
      { summary: 'Mostly Cloudy' },
      { possibility: '' },
    ],
    tempVar: [
     
    ]
    
  };
  
  render() {
    return (
      <div id="ancestor">
        <div className="container-fluid">
            <div className="row">
              <div id="sidebar" className="col-md-3 col-sm-4 col-xs-12 sidebar">
              </div>  
              <Content
                highlights={this.state.highlights}
                tempVar={this.state.tempVar}
                />
            </div>          
        </div>
      </div>
    );
  }
}

export default App;
