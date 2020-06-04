import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    person: null,
    list: null,
    answer: null
  }

  async componentDidMount() {
    // const url = "https://api.randomuser.me/";
    const url2 = "https://api.covid19api.com/summary";
    const response = await fetch(url2);
    const data = await response.json()
    this.setState({person: data.Countries[154], loading: false})
    console.log(data.Countries[154])
    // console.log(data.Countries)

    // let sum = 4 + 4;
    // this.setState({answer: sum, loading: false})

    for (let i = 0; i < data.Countries.length; i++) {
        let covidCountries = `<option> ${data.Countries[i].Country} </option>`
        console.log(covidCountries)
        this.setState({list: covidCountries, loading: false})  
    }
  }

  // countryList() {
  //   for (let i = 0; i < data.Countries.length; i++) {
        
  //   }
  // }

  render() {
    return (
      <div className="sections">
       {this.state.loading || !this.state.person ? (
        <div>loading...</div>    
      ) : (
        <div className="conditionTrue">

        <select className="menu">
          <option>{this.state.person.Country}</option>
          {/* <option>{this.state.sum}</option> */}
          {this.state.covidCountris}
        </select>

        <header className="header">
          <h1>{this.state.person.Country}</h1>
          <p>{this.state.person.Date}</p>
        </header>
          

        <section className="totalConfirmed">
          <h3>TOTAL CONFIRMED</h3>
          <div className="bigNumber one">{this.state.person.TotalConfirmed}</div>
        </section>

        <section className="totalRecovered">
          <h3>TOTAL RECOVERED</h3>
          <div className="bigNumber two"> {this.state.person.TotalRecovered}</div>
        </section>

        <section className="totalDeaths">
          <h3>TOTAL DEATHS</h3>
          <div className="bigNumber three"> {this.state.person.TotalDeaths}</div>
        </section>
          
        <section className="newConfirmed">
          <h5>NEW CONFIRMED</h5>
          <div className="smallNumber one">{this.state.person.NewConfirmed}</div>
        </section>

        <section className="newRecovered">
          <h5>NEW RECOVERED</h5>
          <div className="smallNumber two">{this.state.person.NewRecovered}</div>
        </section>

        <section className="newDeaths">
          <h5>NEW DEATHS</h5>
          <div className="smallNumber three">{this.state.person.NewDeaths}</div>
        </section>
          
        </div>
      )}
      </div>
    );
  }
}

export default App;
