import React from "react";

const URL = "https://gbfs.divvybikes.com/gbfs/en/station_status.json";

class DivvyContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      divvyStation: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          divvyStation: data,
          isLoading: false
        });
      });
  }

  getStation = (stationId) => {
    let station = this.state.divvyStation;
    // console.log({ station });
    // let myStation = station.data.stations.find(dock => dock.station_id === 182);
    return station?.data?.stations?.find(station => station.station_id === stationId)
  };

  render() {

    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <h1>MorningGo</h1>
          <h3> Bikes Available:{this.getStation('183').num_bikes_available} </h3>
          <h3> Docks Available: {this.getStation('183').num_docks_available} </h3> 
        </div>
      );
    }

    return renderContent;
  }
}

export default DivvyContainer;
