import React, {Component} from 'react';
import './App.css';
import calendar from '../assets/calendar.svg';
import location from '../assets/location.svg';
import search from '../assets/search.svg';
import UtilityFunctions from './UtilityFunctions';
// import Content from '../components/Content';

class App extends Component {

  // Object of Util functions class to use its methods
  utilFunctions = new UtilityFunctions(); 
  // Object to get the value of select dropdown list
  selectInput = React.createRef();

  state = {
    weatherDetails: false,
    location: '',
    lat: '',
    long: '',
    completeWeatherApi: '',
    rawWeatherData: '',
    currentWeather: [
      { full_location: 'New York, NY, USA' },
      { formatted_lat: '40.7128°N' },
      { formatted_long: '74.005°W' },
      { time: 'Thu, Aug 12, 2019 4:21 AM' },
      { temp: '30' },
      { todayHighLow: [
        { todayTempHigh: '39' },
        { todayTempHighTime: '2:00 pm' },
        { todayTempLow: '20' },
        { todayTempLowTime: '7:00 am' }
      ]},
      { summary: 'Mostly Cloudy' },
      { possibility: ''}
    ],
    tempToday: [
      { id: 1, hour: '4.00 AM', temp: '15' },
      { id: 2, hour: '5.00 AM', temp: '16'},
      { id: 3, hour: '6.00 AM', temp: '19'},
      { id: 4, hour: '7.00 AM', temp: '19'},
      { id: 5, hour: '8.00 AM', temp: '20'},
      { id: 6, hour: '9.00 AM', temp: '22'}, 
      { id: 7, hour: '10.00 AM', temp: '26'},
      { id: 8, hour: '11.00 AM', temp: '30'},
      { id: 9, hour: '12.00 PM', temp: '31'},
      { id: 10, hour: '1.00 PM', temp: '32'},
      { id: 11, hour: '2.00 PM', temp: '33'},
      { id: 12, hour: '3.00 PM', temp: '34'},     
      { id: 13, hour: '4.00 PM', temp: '34'},           
      { id: 14, hour: '5.00 PM', temp: '32'},
      { id: 15, hour: '6.00 PM', temp: '30'},
      { id: 16, hour: '7.00 PM', temp: '28'},     
      { id: 17, hour: '8.00 PM', temp: '26'},
      { id: 18, hour: '9.00 PM', temp: '26'},
      { id: 19, hour: '10.00 PM', temp: '24'},
      { id: 20, hour: '11.00 PM', temp: '23'}, 
    ],
    highlights: [
      { uvindex: 4 },
      { visibility: 12 },
      { windstatus: [
        { windSpeed: "30 km/h" },
        { windDirection: "30" },
        { derivedWindDirection: 'NNE' }
      ]}
    ]  
  };
  
  handleChoice = () => {
    console.log(this.selectInput.current.value);
  }

  render() {    
    return (
      <div id="info">  
        {/* dropdown selection */}
        <div className="dropDown"> 
          <select className="custom-select custom-select-sm" ref={this.selectInput}>>
            <option value="tashkent" defaultValue>Tashkent</option>
            <option value="samarkand">Samarkand</option>
            <option value="bukhara">Bukhara</option>
          </select>
          <button id="search-btn" onClick={this.handleChoice}>
            <img src={search} width="15" height="15" alt="search"/>
          </button>
        </div>

        <div className="wrapper-left">
          <div id="current-weather">
            {this.state.currentWeather[4].temp}
            <span>°C</span>
          </div>
          <div id="weather-desc">{this.state.currentWeather[6].summary}</div>
          <div className="temp-max-min">
            <div className="max-desc">
              <div id="max-detail">
                <i>▲</i>
                {this.state.currentWeather[5].todayHighLow[0].todayTempHigh}
                <span>°C</span>
              </div>
              <div id="max-summary">at {this.state.currentWeather[5].todayHighLow[1].todayTempHighTime}</div>
            </div>
            <div className="min-desc">
              <div id="min-detail">
                <i>▼</i>
                {this.state.currentWeather[5].todayHighLow[2].todayTempLow}
                <span>°C</span>
              </div>
              <div id="min-summary">at {this.state.currentWeather[5].todayHighLow[3].todayTempLowTime}</div>
            </div>
          </div>
          <div className="wrapper-right">
            <div className="date-time-info">
              <div id="date-desc">
                <img src={calendar} alt="calendar" width="20" height="20"/>
                {this.state.currentWeather[3].time}
              </div>
            </div>
            <div className="locaion-info">
              <div id="location-desc">
                <img src={location} 
                  width="10.83"
                  height="15.83"
                  style={{opacity: 0.9}}
                  alt="location"/>
                {this.state.currentWeather[0].full_location}
                <div id="location-detail" className="mt-1">
                  Lat: {this.state.currentWeather[1].formatted_lat}
                  <br/>
                  Long: {this.state.currentWeather[2].formatted_long}
                </div>
              </div>
            </div>
          </div>
        </div>        
        {/* <Content 
          tempToday={this.state.tempToday}
          highlights={this.state.highlights}
        /> */}
      </div>
    );
  }
}

export default App;
