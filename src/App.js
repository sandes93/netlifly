import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <NavTabs />
      <BrowserRouter basename= {process.env.PUBLIC_URL}>

        <Route exact path=  "/"  component={Home} />
        <Route exact path= "/about"  component={About} />
        <Route exact path= "/projects" component={Projects} />
        <Route path= "/contact" component={Contact} />
      </BrowserRouter>
    <Footer />  
     </div>
  );
}

export default App;
