import React from 'react';


const Sensor = (props) => {
    const {data} = props
    

    return (
        <div className="App ">
            {
                data && data.map((value, key) => {
                    return (
                        <div key={key}>
                            <h1>the value temperature is: {value.temperature} *C</h1>
                            <h1>the value humidity is: {value.humidity} %</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sensor;