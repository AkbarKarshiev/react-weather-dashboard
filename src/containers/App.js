import React, {Component} from 'react';
import './App.css';
import Content from '../components/Content';

class App extends Component {
  state = {
    weather_data: [
      { location: "California" },
      { temperature: [
        { current: "35 C" }
      ]},
      { highlights: [
        { uvindex: "3" },
        { windstatus: [
          { speed: "20 km/h"},
          { direction: "N-E" }
        ]},
        { visibility: "12 km" }
      ]}
    ]
  };
  
  render() {
    return (
      <div id="ancestor">            
        <Content 
          persons={this.state.persons}
          weather_data={this.state.weather_data}
        />
      </div>
    );
  }
}

export default App;
