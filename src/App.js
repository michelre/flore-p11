import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function LocationCard(props) {
    return <div>
        <h1>{props.location.title}</h1>
        <img src={props.location.pictures[0]}/>
    </div>
}


function App() {

    const [locations, setLocations] = useState([]);

    fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
        })


    return (
        <div className="App">
            {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
            
        </div>
    );
}

export default App;
