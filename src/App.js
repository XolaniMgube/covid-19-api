import React, { Component } from 'react';
import './App.css';
import Sanitizer from './images/sanitizer.png'
import Piechart from './images/piechart.png'

class App extends Component {
  
  // For events and setState on getCountryData function
  constructor(props) {
    super(props);
    this.getCountryData = this.getCountryData.bind(this);
  }

  state = {
    listOfCountries: [],
    results: 0
  }

  // pulling all countries data and filtering only the name of countries
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


  // pulling data filtered by the name of the country we select from the menu
  // then returning a summary of the latest summary data for that country
  async getCountryData(e) {
    const url = `https://api.covid19api.com/total/dayone/country/${e.target.value}`;
    const response = await fetch(url);
    const data = await response.json();
    

    this.setState({
      results: data[data.length - 1]
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

        <header>
          <h1>TOTAL CORONA</h1>
          <img src={Sanitizer} alt="sanitizer" />
        </header>

        <div className="page">

          <div className="select-section">
            <select onChange={this.getCountryData}>
              <option>Choose country</option>
              {this.renderCountryOptions()}
            </select>
          </div>

          <div className="piechart-section">
            <img src={Piechart} alt="piechart" />
          </div>

          <div className="stats-section">
            <section className="totalConfirmed">
              <h3>CONFIRMED CASES</h3>
              <div className="bigNumber one">{this.state.results.Confirmed}</div>
            </section>

            <section className="totalRecovered">
              <h3>RECOVERED CASES</h3>
              <div className="bigNumber two"> {this.state.results.Recovered}</div>
            </section>

            <section className="totalDeaths">
              <h3>DEATHS</h3>
              <div className="bigNumber three"> {this.state.results.Deaths}</div>
            </section>
          </div>

        </div>
      </div>
    ); 
  }
}

export default App;
