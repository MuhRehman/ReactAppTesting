import React from "react";

import { Component } from "react";
import LogoBox from "./LogoBox";
import BrandBox from "./BrandBox";




 
export default  class AppBar1 extends Component {


    render () {
 
    return ( 
            <div className="main-dev">
                 <div className="top-area ">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-3">
                            <LogoBox/>
                        </div>
                        <div className="col-md-6">
                            <BrandBox/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="row">
                <div className="col-md-9">

                </div>
                <div className="col-md-3">
                      <div className="brand-logo-right ">
                          <img src="/images/logo.png" alt=""/>
                      </div>
                </div>
                  
                  </div>
                </div>
            </div>
        </div>
    </div>
            </div>
       
        );    
};
   
}

