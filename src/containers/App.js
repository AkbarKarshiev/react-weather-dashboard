import React, {Component} from 'react';
import './App.css';
import calendar from '../assets/calendar.svg';
import locationSvg from '../assets/location.svg';
import search from '../assets/search.svg';
import UtilityFunctions from './UtilityFunctions';
import axios from 'axios';  
import Content from '../components/Content';

class App extends Component {

  // Object of Util functions class to use its methods
  utilFunctions = new UtilityFunctions(); 
  // Object to get the value of select dropdown list
  selectInput = React.createRef();
  cityLocations = [
    {id: 1, name: 'Tashkent', lat: '41.2995', long: '69.2401', full_location: 'Taskent, Uzbekistan'},
    {id: 2, name: 'Samarkand', lat: '39.6270', long: '66.9750', full_location: 'Samarkand, Uzbekistan'},
    {id: 3, name: 'Moscow', lat: '55.7558', long: '37.6173', full_location: 'Moscow, Russia'}
  ]

  state = {
    weatherDetails: false,
    location: '',
    lat: '',
    long: '',
    completeWeatherApi: '',
    rawWeatherData: '',
    currentWeather: [
      { full_location: '' },
      { formatted_lat: '' },
      { formatted_long: '' },
      { time: '' },
      { temp: '' },
      { todayHighLow:  [
         { todayTempHigh: '' },
         { todayTempHighTime: '' },
         { todayTempLow: '' },
         { todayTempLowTime: '' } 
      ]},
      { summary: '' },
      { possibility: ''}
    ],
    tempToday: [
      
    ],
    highlights: [
      { uvIndex: 0 },
      { visibility: 0 },
      { windstatus: [
        { windSpeed: 0 },
        { windDirection: '' },
        { derivedWindDirection: '' }
      ]}
    ]  
  };

  render() { 
    return (
      <div id="ancestor">
        <div className="container-fluid">
          <div className="row">
            <div id="sidebar" className="col-md-3 col-sm-4 col-xs-12 sidebar">
              <div className="dropDown"> 
                <select className="custom-select custom-select-sm" id="dropDownStyle" ref={this.selectInput}>>
                  <option value="tashkent" defaultValue>Tashkent</option>
                  <option value="samarkand">Samarkand</option>
                  <option value="moscow">Moscow</option>
                </select>
                <button id="search-btn" onClick={this.handleChoice}>
                  <img src={search} width="20" height="20" alt="search"/>
                </button>
              </div>
              <div id="info">
                <div className="wrapper-left">
                  <div id="current-weather">
                    {this.state.currentWeather[4].temp}
                    <span>°C</span>
                  </div>
                  <div id="weather-desc">{this.state.currentWeather[6].summary}</div>
                  <div class="temp-max-min">
                    <div class="max-desc">
                      <div id="max-detail">
                        <i>▲</i>
                        {this.state.currentWeather[5].todayHighLow[0].todayTempHigh}
                        <span>°C</span>
                      </div>
                      <div id="max-summary">at {this.state.currentWeather[5].todayHighLow[1].todayTempHighTime}</div>
                    </div>
                    <div class="min-desc">
                      <div id="min-detail">
                        <i>▼</i>
                        {this.state.currentWeather[5].todayHighLow[2].todayTempLow}
                        <span>°C</span>
                        </div>
                        <div id="min-summary">at {this.state.currentWeather[5].todayHighLow[3].todayTempLowTime}</div>
                    </div>
                  </div> {/*end of temp-max-min*/}
                </div> {/*end of wrapper-left*/}
                <div className="wrapper-right">
                  <div className="date-time-info">
                    <div id="date-desc">
                      <img src={calendar} alt="calendar" width="20" height="20"/>
                      {this.state.currentWeather[3].time}
                    </div>
                  </div>
                  <div className="locaion-info">
                    <div id="location-desc">
                      <img src={locationSvg} 
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
                  </div> {/*end of location-info*/}
                </div> {/*end of wrapper-right*/}
              </div> {/*end of info*/}
            </div>
            <Content 
              className="col-md-9 col-sm-8 col-xs-12 content"
              tempToday={this.state.tempToday}
              highlights={this.state.highlights}
            />
          </div>
        </div>
      </div>
            
        
    );
  }

  handleChoice = async () => {
    const loc = this.utilFunctions.convertToTitleCase(this.selectInput.current.value);
    await this.setState({location: loc});
    this.fetchWeatherDataAndOrganizeAllDetails();
  }

  makeTempTodayEmpty = () => {
    this.setState({tempToday: []})    
  }

  locationEntered = () => {
    if(this.state.location === '') {
      this.setState({location: 'Tashkent'});
    }
    this.makeTempTodayEmpty();
  }

  getCoordinates = () => {
    this.locationEntered();
    var loc = this.state.location;
    const coords = {
      lat: '',
      long: '',
      full_location: ''
    };
    this.cityLocations.map((city) => {
      if (loc === city.name) {
        this.setState({lat: city.lat});
        this.setState({long: city.long});
        coords.lat = city.lat;
        coords.long = city.long;
        coords.full_location = city.full_location;
      } 
      return null;
    })
    return coords;
  }

  setFormatCoordinates = () => {
    const coordinates = this.getCoordinates();
    let form_lat = '';
    let form_long = '';
    let currentWeatherCopy = JSON.parse(JSON.stringify(this.state.currentWeather));

    // Remember to beautify lat for N/S
    if (coordinates.lat > 0) {
      form_lat = (Math.round(coordinates.lat * 10000) / 10000).toString() + '°N';
    } else if (coordinates.lat < 0) {
      form_lat = (-1 * (Math.round(coordinates.lat * 10000) / 10000)).toString() + '°S';
    } else {
      form_lat = (Math.round(coordinates.lat * 10000) / 10000).toString();
    }
    // Remember to beautify long for N/S
    if (coordinates.long > 0) {
      form_long = (Math.round(coordinates.long * 10000) / 10000).toString() + '°E';
    } else if (coordinates.long < 0) {
      form_long = (-1 * (Math.round(coordinates.long * 10000) / 10000)).toString() + '°W';
    } else {
      form_long = (Math.round(coordinates.long * 10000) / 10000).toString();
    }
    
    currentWeatherCopy[0].full_location = coordinates.full_location;
    currentWeatherCopy[1].formatted_lat = form_lat;
    currentWeatherCopy[2].formatted_long = form_long; 
    this.setState({currentWeather: currentWeatherCopy});
  }

  fixWeatherApi = async () => {
    await this.setFormatCoordinates();
    const weatherApi = 
      'https://csm.fusioncharts.com/files/assets/wb/wb-data.php?src=darksky&lat=' + 
      this.state.lat + '&long=' + 
      this.state.long;
    this.setState({completeWeatherApi: weatherApi});
  }

  fetchWeatherDataAndOrganizeAllDetails = async () => { // Final function
    await this.fixWeatherApi();
    axios.get(this.state.completeWeatherApi)
    .then(response => {
      this.setState({rawWeatherData: response.data});
    })
    .catch(error => {
      alert(error);
    })
    .then(data => {
     this.organizeAllDetails();
    })
    .catch(error => {
      alert(error);
    });
  }

  getTimezone = () => {
    return this.state.rawWeatherData.timezone;
  }

  getCurrentTime = () => {
    const currentTime = this.state.rawWeatherData.currently.time;
    const timezone = this.getTimezone();
    return this.utilFunctions.unixToHuman(timezone, currentTime).fullTime;
  }

  getSummary = () => {
    let currentSummary = this.utilFunctions.convertToTitleCase(this.state.rawWeatherData.currently.summary);
    if (currentSummary.includes(' And'))  {
      currentSummary = currentSummary.replace(' And', ', ');
    }
    return currentSummary;
  }

  getPossibility = () => {
    let possible = this.utilFunctions.formatPossibility(this.state.rawWeatherData.daily.icon);
    if (possible.includes(' And')) {
      possible = possible.replace(' And', ', ');
    }
    return possible;
  }

  getCurrentTemp = () => {
    let currentTemp = this.state.rawWeatherData.currently.temperature;
    console.log("CurrentTempType: " +  this.state.rawWeatherData.currently.temperature)
    currentTemp = this.utilFunctions.fahToCel(currentTemp);
    return currentTemp;
  }

  getTodayDetails = () => {
    return this.state.rawWeatherData.daily.data[0];
  }

  getTodayTempHighLowWithTime = () => {
    const timezone = this.getTimezone();
    const todayDetails = this.getTodayDetails();
    var TodayHighLowWithTimeArray = [
      {todayTempHigh: ''},
      {todayTempHighTime: ''},
      {todayTempLow: ''},
      {todayTempLowTime: ''}
    ];
    TodayHighLowWithTimeArray[0].todayTempHigh = this.utilFunctions.fahToCel(todayDetails.temperatureMax);
    TodayHighLowWithTimeArray[1].todayTempHighTime = this.utilFunctions.unixToHuman(timezone, todayDetails.temperatureMaxTime).onlyTime;
    TodayHighLowWithTimeArray[2].todayTempLow = this.utilFunctions.fahToCel(todayDetails.temperatureMin);
    TodayHighLowWithTimeArray[3].todayTempLowTime  = this.utilFunctions.unixToHuman(timezone, todayDetails.temperatureMinTime).onlyTime;
    
    return TodayHighLowWithTimeArray;
  }

  setCurrentWeatherInfo = () => {
    let currentWeatherCopy = JSON.parse(JSON.stringify(this.state.currentWeather));
    currentWeatherCopy[3].time = this.getCurrentTime();
    currentWeatherCopy[4].temp = this.getCurrentTemp();
    currentWeatherCopy[5].todayHighLow = this.getTodayTempHighLowWithTime();
    currentWeatherCopy[6].summary = this.getSummary();
    currentWeatherCopy[7].possibility = this.getPossibility();

    this.setState({currentWeather: currentWeatherCopy});
  }

  getHourlyInfoToday = () => {
    return this.state.rawWeatherData.hourly.data;
  }

  getSetHourlyTempInfoToday = () => {
    const unixTime = this.state.rawWeatherData.currently.time;
    const timezone = this.getTimezone();
    const todayMonthDate = this.utilFunctions.unixToHuman(timezone, unixTime).onlyMonthDate;
    const hourlyData = this.getHourlyInfoToday();
    const hourlyTempInfoTodayArray = [];
    for (let i = 0; i < hourlyData.length; i++) {
      const hourlyTimaAllTypes = this.utilFunctions.unixToHuman(timezone, hourlyData[i].time);
      const hourlyOnlyTime = hourlyTimaAllTypes.onlyTime;
      const hourlyMonthDate = hourlyTimaAllTypes.onlyMonthDate;
      if (todayMonthDate === hourlyMonthDate) {
        let hourlyObject = { id: null, hour: '', temp: ''};
        hourlyObject.id = i;
        hourlyObject.hour = hourlyOnlyTime;
        hourlyObject.temp = this.utilFunctions.fahToCel(hourlyData[i].temperature);
        hourlyTempInfoTodayArray.push(hourlyObject);
      }
    }
    /*
     To cover the edge case where the local time is between 10 — 12 PM,
     and therefore there are only two elements in the array
     this.tempVar.tempToday. We need to add the points for minimum temperature
     and maximum temperature so that the chart gets generated with atleast four points.
    */
    if (hourlyTempInfoTodayArray.length <= 2) {
      const minTempObject = {
        id: 1,
        hour: this.state.currentWeather[5].todayHighLow[1].todayTempHighTime,
        temp: this.state.currentWeather[5].todayHighLow[0].todayTempHigh
      }
      const maxTempObject = {
        id: 2,
        hour: this.state.currentWeather[5].todayHighLow[3].todayTempLowTime,
        temp: this.state.currentWeather[5].todayHighLow[2].todayTempLow
      }

      hourlyTempInfoTodayArray = hourlyTempInfoTodayArray.unshift(maxTempObject, minTempObject);
    }
    this.setState({tempToday: hourlyTempInfoTodayArray});
  }

  getUVIndex = () => {
    return  this.state.rawWeatherData.currently.uvIndex;    
  }

  getVisibility = () => {
    const visibilityInMiles = this.state.rawWeatherData.currently.visibility;
    return this.utilFunctions.mileToKilometer(visibilityInMiles);
  }

  getWindStatus = () => {
    const windStatus = [
      { windSpeed: '' },
      { windDirection: '' },
      { derivedWindDirection: '' }
    ];
    const windSpeedInMiles = this.state.rawWeatherData.currently.windSpeed;
    windStatus[0].windSpeed = this.utilFunctions.mileToKilometer(windSpeedInMiles);
    const absoluteWindDir = this.state.rawWeatherData.currently.windBearing;
    windStatus[1].windDirection = absoluteWindDir;
    windStatus[2].derivedWindDirection = this.utilFunctions.deriveWindDir(absoluteWindDir);

    return windStatus;
  }

  setTodayHighlightsInfo = () => {
    const highlightsCopy = [
      { uvIndex: null },
      { visibility: null },
      { windstatus: [] }
    ];

    highlightsCopy[0].uvIndex = this.getUVIndex();
    highlightsCopy[1].visibility = this.getVisibility();
    highlightsCopy[2].windstatus = this.getWindStatus();

    this.setState({highlights: highlightsCopy});
  }

  // Top level organization and rendering
  organizeAllDetails = async () => {
    // top level organization
    this.setCurrentWeatherInfo();
    this.setTodayHighlightsInfo();
    this.getSetHourlyTempInfoToday();
    console.log(this.state);
  }

  async componentDidMount() {
    const loc = this.utilFunctions.convertToTitleCase(this.selectInput.current.value);
    await this.setState({location: loc});
    this.fetchWeatherDataAndOrganizeAllDetails();
  }
}

export default App;
