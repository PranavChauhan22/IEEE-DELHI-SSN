import Cards from "./Components/Cards";
import Cards_Carousel from "./Components/MyCarousel";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import GallerySelector from "./Components/GallerySelector";
import Testimonials from "./Components/Testimonials";
import Header from "./Components/Header";
import SSN from "./Components/SSN";
import MyCarousel from "./Components/MyCarousel";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Events from "./Components/Events";
import MediaCard from "./Components/MediaCard";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from "./Components/About";


import "../src/styles/App.css"
import Reportpanel from "./Components/Reportpanel";
import ReportsDisplay from "./Components/ReportDisplay";
import ReportCard from "./Components/ReportCard";


function App() {
  return (
   

    <Router>

 
      <Switch>
        <Route path="/" exact>
          <Home/>
          <About/>
          <GallerySelector/>
          <Cards_Carousel/>
          {/* <Reportpanel/> */}
          {/* <ReportsDisplay/> */}
          {/* <ReportCard/> */}
          {/* <Events/> */}

        </Route>
        
      </Switch>
   
  </Router>
   
  );
}

export default App;
