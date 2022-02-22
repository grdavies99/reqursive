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
                  <li>
                      <button onClick={()=>{
                          console.log('clicked');
                            if(document.getElementById('request').style.display !== "flex"){
                                document.getElementById('request').style.display = "flex";
                            }
                            else{
                                document.getElementById('request').style.display = "none";
                            }
                      }
                      }>Request More Info</button>
                      <div>
                          <form id="request">
                              <label>Name:</label>
                              <input type="text" required/>
                              <label>Company Name:</label>
                              <input type="text" required/>
                              <label>Email:</label>
                              <input type="text" required/>
                              <button type="submit">Submit</button>
                          </form>
                      </div>
                    </li>
              </ul>
          </nav>
    );
  }
}