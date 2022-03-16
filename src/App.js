import './App.css';
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDroplet,faHeartPulse,faTemperatureQuarter,faThermometer} from '@fortawesome/free-solid-svg-icons';


const firebaseConfig = { 
  apiKey: "AIzaSyDqyL9pkPJCd9H60WcanhLXHP0jrhQL2vM",
    authDomain: "esp32-firebase-9bd7f.firebaseapp.com",
    databaseURL: "https://esp32-firebase-9bd7f-default-rtdb.firebaseio.com",
    projectId: "esp32-firebase-9bd7f",
    storageBucket: "esp32-firebase-9bd7f.appspot.com",
    messagingSenderId: "231934248503",
    appId: "1:231934248503:web:0a179b52ec63fcb86321b2",
    measurementId: "G-F6N80KKH25"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
export { db }

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const db = getDatabase();
    const starCountRef = ref(db, 'room-1');
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      this.setState({data: data})
    });
  }
  
  render() {
    const {data} = this.state
    console.log(data)
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          <h3>Smart Healthcare Monitoring System</h3>
        </div>

        <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                  <th>Patient Room</th>
                  <th>Room Temperature</th>
                  <th>Humidity</th>
                  <th>Heartbeat</th>
                  <th>Blood Oxygen</th>
                  <th>Body Temperature</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{data.room_name}</td>     
                  <td>{data.temperature} °C</td>
                  <td>{data.humidity} %</td>
                  <td>{data.heartbeat} bpm</td>
                  <td>{data.SpO2} %</td>
                  <td>{data.bodytemperature} °C</td>
                </tr>    
            </tbody>
         </table>
        </div>

        <div className="App">

          <div className="flex">
          <FontAwesomeIcon icon={faTemperatureQuarter} size='3x' color="#40b862" />
          <h1 className="space">Room Temperature</h1>
          <span className="value colour-temperature">{data.temperature} %</span>
          </div>

          <div className="flex">
          <FontAwesomeIcon icon={faDroplet} size='3x' color="#ffffff" />
          <h1 className="space">Humidity</h1>
          <span className="value temperature">{data.humidity} %</span>
          </div>

          <div className="flex">
          <FontAwesomeIcon icon={faHeartPulse} size='3x' color="#e04abb" />
          <h1 className="space">Heartbeat</h1>
          <span className="value colour-heartbeat">{data.heartbeat} BPM</span>
          </div>

          <div className="flex">
          <FontAwesomeIcon icon={faDroplet} size='3x' color="#e04a4a" />
          <h1 className="space">Blood Oxygen</h1>
          <span className="value colour-blood-oxygen">{data.bodytemperature} %</span>
          </div>
          
          <div className="flex">
          <FontAwesomeIcon icon={faThermometer} size='3x' color="#FFA500" />
          <h1 className="space">Body Temperature</h1>
          <span className="value colour-body-temperature">{data.bodytemperature} °C</span>
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;
