import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    person: null
  }

  async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    const url2 = "https://api.covid19api.com/summary";
    const response = await fetch(url2);
    const data = await response.json()
    this.setState({person: data.Countries[154], loading: false})
    console.log(data.Countries[154])
  }

  render() {
    return (
      <div className="App">
       {this.state.loading || !this.state.person ? (
        <div>loading...</div>    
      ) : (
        <div>
          <div>{this.state.person.Country}</div>
          <div>{this.state.person.NewConfirmed}</div>
          <div>{this.state.person.TotalConfirmed}</div>
          <div>{this.state.person.Date}</div>
        </div>
      )}
      </div>
    );
  }
}

export default App;
