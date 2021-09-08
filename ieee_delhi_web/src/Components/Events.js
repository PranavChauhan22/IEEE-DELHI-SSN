import {React,Component} from 'react'
import {useState,useEffect} from 'react'
import MediaCard from './MediaCard';
import "../styles/Events.css"
import config from "../Components/config"
import load from "../Components/load"




 class Events extends Component {
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
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  };
  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }
  
  render() {
    const { cars, error } = this.state;
    if (error) {
      return <div>{this.state.error}</div>;
    }
    return (
      <MediaCard data={cars}/>
    );
  }
  
}

export default Events
