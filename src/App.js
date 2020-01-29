import React, { Component } from "react";
import  "./app.css";
import AppBar1 from "./components/AppBar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";


class App extends Component {

    render(){



   return (
      <React.Fragment>
      <AppBar1/>
      
       <Navbar/>
       <Content/>
       <Footer/>      
      </React.Fragment>

   );
    
   };

}
export default  App;