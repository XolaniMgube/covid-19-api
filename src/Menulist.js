import React, { Component } from 'react';

class MenuList extends Component {

    state = {
        loading: true,
        countryObjects: null,
        individualCountry: null
      }

    async componentDidMount() {
        const url2 = "https://api.covid19api.com/summary";
        const response = await fetch(url2);
        const data = await response.json()

        this.setState({
            countryObjects: data.Countries,
            loading: false,
            individualCountry: data.Countries[152].Country
        })
    }

    render() {
        let whatever = this.state.countryObjects.map((xolani)=>{
            console.log(1)
        })
        console.log(whatever)
        return (
            // <li>{this.state.countryObjects}</li>
            <li>Xolani</li>
        )
    }
}

export default MenuList