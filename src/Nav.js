import React, { useState, useEffect } from 'react'
import './Nav.css';
;
function Nav() {

const [show, handleShow]=useState(false);              /*Peace of state for using in useEffect function */
useEffect(() => {
  window.addEventListener("scroll", () =>{            /*Its listening to scroll */
    if(window.scrollY > 100){                         /*when scroll> 100 pixel at Y axis then this condition is true means we have scrolled little bit */
      handleShow(true);                               /*This is a peace of state which is true when condition true This state is used later in the code below */
    }else handleShow(false);
  });

  return () => {
    window.removeEventListener("scroll");             /*Everytime useEffect fired off for whatever reason before you fire off it again remove the previous listener */
  };
}, []);


  return (
    <div className={`nav ${show && "nav__black"}`}> { /*Always have the nav class but if show is true then I want to append nav__black class also*/}
    {/*Let's see logo */}
        <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_pmc.png"
        alt="Netflix Logo"
        />
      {/*Let's See Avatar */}
        <img className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
        />

    </div>
  );
}

export default Nav;