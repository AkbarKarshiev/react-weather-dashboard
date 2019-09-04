import React, {Component} from 'react';
import './App.css';
import Content from '../components/Content';

class App extends Component {
  state = {
    tempToday: [
      { id: 1, hour: '11.00 AM', temp: '35' },
      { id: 2, hour: '12.00 PM', temp: '36' },
      { id: 3, hour: '1.00 PM', temp: '37' },
      { id: 4, hour: '2.00 PM', temp: '38' },
      { id: 5, hour: '3.00 PM', temp: '36' },
      { id: 6, hour: '4.00 PM', temp: '35' }
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
  
  render() {
    return (
      <div id="ancestor">            
        <Content 
          tempToday={this.state.tempToday}
          highlights={this.state.highlights}
        />
      </div>
    );
  }
}

export default App;
