import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  // For events and setState on getCountryData function
  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    listOfCountries: [],
    testConfirmed: 0
  }

  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();

    const listOfCountries = data.Countries.map((value) => {
      return value.Country
    })

    this.setState({
      listOfCountries
    })
  }


  async getCountryData(e) {
    const url = `https://api.covid19api.com/total/dayone/country/${e.target.value}`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      testConfirmed: data[data.length - 1]
    })
  }


  // displays countries in dropdown
  renderCountryOptions() {
    return this.state.listOfCountries.map((country, i) => {
      return <option key={i}>{country}</option>
    })
  }


  render() {
    return ( 
      <div className="app">  
          <div className="menu">
            <select onChange={this.getCountryData}>
              <option>Choose country</option>
              {this.renderCountryOptions()}
            </select>
          </div>

          <header className="header">
            <h1>{this.state.testConfirmed.Country}</h1>
            <p>{this.state.testConfirmed.Date}</p>
          </header>
            
          <section className="totalConfirmed">
            <h3>CONFIRMED CASES</h3>
            <div className="bigNumber one">{this.state.testConfirmed.Confirmed}</div>
          </section>

          <section className="totalRecovered">
            <h3>RECOVERED CASES</h3>
            <div className="bigNumber two"> {this.state.testConfirmed.Recovered}</div>
          </section>

          <section className="totalDeaths">
            <h3>DEATHS</h3>
            <div className="bigNumber three"> {this.state.testConfirmed.Deaths}</div>
          </section>
      </div>
    );
  }
}

export default App;
