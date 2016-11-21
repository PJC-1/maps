import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
    constructor(){
        super()
        this.state = {
            venues: []
        }
    }

    componentDidMount(){

        const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=37.773972,-122.431297&client_id= ZGBQZICBGNWKSWSBVVRBQB0MSEIZUCONBP34NCBME3HOSMYZ&client_secret= PJD1WTF5WMYHYVYYGY4EGFRSL0TKJAHQBYCPXZB42LXU4GK4'


        superagent
        .get(url)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {
            const venues = response.body.response.venues
            console.log(JSON.stringify(venues))
            this.setState({
                venues: venues
            })

        })

    }

    render(){
        const location = {
            lat: 37.773972,
            lng: -122.431297
        }

        const markers = [
            {
                location: {
                    lat: 37.773972,
                    lng: -122.431297
                }
            }
        ]

        return (
            <div>
                This is a REACT APP!
                <div style={{width:300, height:600, background:'red'}}>
                    <Map center={location} markers={markers} />
                </div>
                <Places venues={this.state.venues} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
