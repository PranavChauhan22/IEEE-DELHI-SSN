import {React,Component} from 'react'
import {useState,useEffect} from 'react'

import "../styles/ReportsDisplay.css"
import config1 from "../Components/config1"
import load1 from "../Components/load1"
import ReportCard from './ReportCard'




 class ReportsDisplay extends Component {
  state = {
    cars: [],
    error: null
  }
  onLoad = (data, error) => {
    if (data) {
      const cars = data.cars;
     
      
      this.setState({ cars });
    } else {
      this.setState({ error });
    }
  };
  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config1.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config1.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load1(this.onLoad);
    });
  };
  componentDidMount() {
    // 1. load1 the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }
  
  
  render() {
    const { cars, error } = this.state;
    if (error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <div>

        <div className="report-logo"/>
      <div className="reports-bg">
        <div className="reports-img"/>
     <ReportCard data={cars}/>
      </div>
      </div>
    );
  }
  
}

export default ReportsDisplay
