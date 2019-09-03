import React, {Component} from 'react';
import './App.css';
import Content from '../components/Content';

class App extends Component {
  state = {
    persons: [
      {id: 'sad', name: 'Max', age: '45'},
      {id: 'sad', name: 'Manu', age: '45'}
    ]
  };
  
  render() {
    return (
      <div id="ancestor">            
        <Content 
          persons={this.state.persons}
        />
      </div>
    );
  }
}

export default App;
