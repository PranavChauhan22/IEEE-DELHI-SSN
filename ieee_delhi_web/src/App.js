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

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";

import "../src/styles/App.css";
import Reportpanel from "./Components/Reportpanel";
import ReportsDisplay from "./Components/ReportDisplay";
import ReportCard from "./Components/ReportCard";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import CarouselDemo from "./Components/demo/CarouselDemo";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="app">
              <Home/>
          <About/>
          <Services/>
          <GallerySelector/>
          <MyCarousel/>
        
  
          <Testimonials/>
          <Contact/>
              
            </div>
          </Route>
          <Route path="/Submit" exact>
            <Login />
          </Route>
          <Route path="/Report_display" exact>
            <ReportsDisplay />
          </Route>

          <Route path="/Report" exact>
            <Reportpanel />
          </Route>
          <Route path="/Event" exact>
            <Dashboard />
          </Route>

          <Route path="/Event_display" exact>
            <Events />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
