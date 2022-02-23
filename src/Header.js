import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";

export default class Header extends Component{
    
    render(){
        return(
          <nav>
              <h1><a href="/">Reqursive</a></h1>
              <ul>
                  <li><a href="/product">Products</a></li>
                  <li><a href="/support">Support</a></li>
                  <li><a href="/about">About</a></li>
                  
              </ul>
          </nav>
    );
  }
}