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
import Contact from "./Components/Contact";


function App() {
  return (
   
<div className="app">

    <Router>

 
      <Switch>
        <Route path="/" exact>
          {/* <Home/>
          <About/>
          <GallerySelector/>
          <Cards_Carousel/> */}
          {/* <Contact/> */}
          {/* <Reportpanel/> */}
          {/* <ReportsDisplay/> */}
          {/* <ReportCard/> */}
          {/* <Events/> */}
          {/* <Contact/> */}
          <Testimonials/>

        </Route>
        
      </Switch>
   
  </Router>
   
</div>
  );
}

export default App;
