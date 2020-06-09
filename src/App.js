import React, { Component } from 'react';
import './App.css';
// import Menu from './components/Menu'
import MenuList from './Menulist'

class App extends Component {

  state = {
    loading: true,
    countryObjects: null,
    individualCountry: null
  }

  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json()

    this.setState({
      countryObjects: data.Countries,
      loading: false,
      individualCountry: data.Countries[154]
    })
  }

  render() {
    return (
      
      <div className="sections">
      {/* <Menu /> */}
      
       {this.state.loading || !this.state.countryObjects || !this.state.individualCountry ? (
        <div>loading...</div>    
      ) : (
        <div className="conditionTrue">

        <div className="menu">
          <ul>
            <MenuList />
          </ul>
        </div>

        <header className="header">
          <h1>{this.state.individualCountry.Country}</h1>
          <p>{this.state.individualCountry.Date}</p>
        </header>
          

        <section className="totalConfirmed">
          <h3>TOTAL CONFIRMED</h3>
          <div className="bigNumber one">{this.state.individualCountry.TotalConfirmed}</div>
        </section>

        <section className="totalRecovered">
          <h3>TOTAL RECOVERED</h3>
          <div className="bigNumber two"> {this.state.individualCountry.TotalRecovered}</div>
        </section>

        <section className="totalDeaths">
          <h3>TOTAL DEATHS</h3>
          <div className="bigNumber three"> {this.state.individualCountry.TotalDeaths}</div>
        </section>
          
        <section className="newConfirmed">
          <h5>NEW CONFIRMED</h5>
          <div className="smallNumber one">{this.state.individualCountry.NewConfirmed}</div>
        </section>

        <section className="newRecovered">
          <h5>NEW RECOVERED</h5>
          <div className="smallNumber two">{this.state.individualCountry.NewRecovered}</div>
        </section>

        <section className="newDeaths">
          <h5>NEW DEATHS</h5>
          <div className="smallNumber three">{this.state.individualCountry.NewDeaths}</div>
        </section>
          
        </div>
      )}
      </div>
    );
  }
}

export default App;
