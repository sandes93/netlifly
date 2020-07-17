import React from "react";
import Jumbotron from "../Jumbotron/index";
import NavTabs from "../NavTabs";
import Footer from "../Footer";

function Home() {
  return (
  	<div>
  	     <NavTabs />
    <Jumbotron>
      <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
      <p className="lead text-Dark font-weight-bold">Bringing ideas to life!</p>
    </Jumbotron>
    	      <Footer />
    </div>
  );
}

export default Home;
