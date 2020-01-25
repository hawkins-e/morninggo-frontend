import React from "react";

const URL = "https://gbfs.divvybikes.com/gbfs/en/station_status.json";

class DivvyContainer extends React.Component {
    constructor() {
    super();
    this.state = {
        divvyStation: []
      
    };
    
    }


    componentDidMount() {
        
        fetch(URL)
            .then(response => response.json())
            .then((data => {
                // console.log(data.stations[])
                this.setState({
                    divvyStation: data
                })
            }
                ));

    }


    // getHp = stats => {
    //     //   const filteredArray = stats.filter(stat => {
    //     //     return stat.name === 'hp'
    //     //   });
    //     //   const value = filteredArray[0].value;
    //     //   return value;


    getStation = stations => {
      
      const filteredArray = this.state.divvyStation
      
      console.log(filteredArray)

    //   products.find((product) => {
    //     return product.items.some((item) => {
    //   //^^^^^^
    //       return item.name === 'milk';
    //     });
    //   });


//     const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12

          filteredArray.find((data => data > 10))
        //   return data.stations.find((station) => {
            //   console.log(station)
              
            // return station.station_id === "182"
    
      
       
    //   return foundStation
    //   const value = filteredArray[0].value
    //   return value       
    }




    render(){

        return(
            <div> 
                <h1>MorningGo</h1>
                <h3> {this.getStation()} </h3>
            </div>

        )
    
    }



}

export default DivvyContainer