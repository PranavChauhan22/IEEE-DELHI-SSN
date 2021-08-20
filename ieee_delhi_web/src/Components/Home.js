import React from "react";
import { render } from "react-dom";
import Header from "./Header";


const Home = () => (
  <div>
    <Header/>
  </div>
);

render(<Home />, document.getElementById("root"));

export default Home
