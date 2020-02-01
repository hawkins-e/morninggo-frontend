import React from "react"

const URL = "http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=642632906178436fa3f103470c610444&mapid=40380"

class CtaContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cta: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(URL,{
      method: "GET", 
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json charset=UTF-8",
      }})
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          cta: data,
          isLoading: false,
        });
      });
  }

  render() {

    // console.log("DEBUG RENDER", this.state.divvyStation)
    let renderContent;
    if (this.state.isLoading) {
      renderContent = <div> Is Loading... </div>;   
    } else {    
      renderContent = (
        <div>
          <h1>CTA</h1>
          <h3> My Train </h3>
        </div>
      );
    }

    return renderContent;
  }
}

export default CtaContainer 