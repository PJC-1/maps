import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
    componentDidMount(){
        console.log('componentDidMount')
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
                <Places />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
