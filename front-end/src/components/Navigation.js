import React, { Component } from "react";
import logo from '../images/joe+bailey.svg';

window.addEventListener("scroll",function(){
  var target = document.getElementById('main-navigation');
  if(window.pageYOffset > 600){
   target.style.backgroundColor = "rgba(0,0,0,.4)"; 
  }
  else if(window.pageYOffset < 600){
    target.style.backgroundColor = "transparent";
  }
},false);

class Navigation extends Component {
  render() {
    return (

        <nav>
          <ul className="main-nav" id="main-navigation">
            <li>
                <div className="logo-container"><a href='/'><img src={logo} alt="Logo" /></a></div>
            </li>
            <div className="nav-links-container">
              <li>
                <a href='/#our-story'> Our Story </a>
              </li>
              <li>
                <a href='/#details'> Details </a>
              </li>
              <li>
                <a href='/#wedding-party'> Wedding Party </a>
              </li>
              <li>
                <a href='/#accommodations'> accommodations </a>
              </li>
              <li>
                <a href='/#registry'> Registry </a>
              </li>
              <li>
                <a href='#rsvp'> RSVP </a>
              </li>
            </div>
          </ul>
        </nav>
    )
  }

}

export default Navigation
