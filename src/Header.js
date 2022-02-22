import React, { Component } from 'react';
// import { NavLink } from "react-router-dom";

export default class Header extends Component{
    render(){
        return(
          <nav>
              <h1>Reqursive</h1>
              <ul>
                  <li>Products</li>
                  <li>Support</li>
                  <li>About</li>
              </ul>
          </nav>
    );
  }
}