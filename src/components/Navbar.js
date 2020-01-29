import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
      
     
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                
           <div  data-toggle="modal" data-target="#exampleModal">
                <div className="row">
                    <img src="/images/home.png" alt=""/>
                <a className="nav-link" href="#">Home </a>
                </div>  
                </div>  
            </li>
            <li className="nav-item active">
                <div  data-toggle="modal" data-target="#exampleModal">

                <div className="row">
                    <img src="/images/staff.png" alt=""/>
              <a className="nav-link" href="#">Service </a>
                </div>
                </div>
          
            </li>
            <li className="nav-item active">
                <div  data-toggle="modal" data-target="#exampleModal">
                <div className="row">
                    <img src="/images/product.png" alt="" />
              <a className="nav-link" href="#">Products </a>
                </div>
                </div>
                
            </li>

            <li className="nav-item active">
                <div  data-toggle="modal" data-target="#exampleModal">
                <div className="row">
                    <img src="/images/businessman.png" alt="" />
              <a className="nav-link" href="#">About </a>
                </div>
                </div>
            </li>
            
           
           
          </ul>
          
        </div>
    </div>
      </nav>       
            </div>
        )
    }
}
