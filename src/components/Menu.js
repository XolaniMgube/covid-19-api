import React, { Component } from 'react'

class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          list: null,
          country: null
        }
    }
    

    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.Countries[0].Country)
        let data2 = data.Countries

        let people

        for(let i = 0; i < data2.length; i++) {
            people = data2[i].Country
            // document.write(`<select><option> ${people} <option><select> <br>`)
            
            // return people
        }

        let save = prompt("xolani")
        document.write(save)
        
        


        this.setState(
        {
            list: data2[0].Country,
            country: people
        }
        )
    }
    

    render() {
        return (
            <div>
                <div>SESIFIKILE - {this.state.list}</div>
                <div>{this.state.country}</div>
                
            </div>
        )
    }
}

export default Menu