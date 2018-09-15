import React, { Component } from 'react';
import Station from '../Station/Station'
import Papa from 'papaparse'

class StationList extends Component {
    state = {
        longitude: null,
        latitude: null,
        stations : []
    };

    distance = (lat1, long1, lat2, long2) => {
        return Math.sqrt(Math.pow(Math.abs(lat1 - lat2), 2) + Math.pow(Math.abs(long1 - long2), 2));
    }

  render() {
    let stationObjects = null;
    navigator.geolocation.getCurrentPosition((position) => {
        const csvResponse = fetch('stops.csv')
        const csv = csvResponse.text;
        const results = Papa.parse(csv);
        const stations = results.data.filter((station) => {
            const lat = station['stop_lat'];
            const long = station['stop_long'];
            return this.distance(lat, long, position.coords.latitude, position.coords.longitude) < 100;
        })
        this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            stations: [...stations]
        })
        stationObjects = stations.map((station) => {
            return <Station name={station['name']} />
        });
    });

    return (
      <div className="StationList">
        {stationObjects}
      </div>
    );
  }
}

export default StationList;