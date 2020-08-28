import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Components
import Head from "./Components/Header/Head.js";

import Home from "./Components/Content/Home.js";
import About from "./Components/Content/About.js";
import Projects from "./Components/Content/Projects.js";

/*

TODO: Make a better portfolio page with what I learned

* Try to use the following elements:
  - Route
  - Hooks
  - Context/Redux
  - CSS Styling

*/

function App() {
  return (
    <Router>
      <Head />
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
    </Router>
  );
}

export default App;
