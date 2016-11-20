import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
    render(){
        return (
            <div>
                This is a REACT APP!
                <Map />
                <Places />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
