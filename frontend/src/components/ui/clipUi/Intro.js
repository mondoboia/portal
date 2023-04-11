import React from "react";
import classes from "./Intro.module.css";
import VisibilitySensor from "react-visibility-sensor";

function Intro() {
  function onChange(isVisible) {
    if (isVisible) {
      document.getElementById("mainHeader").style.backgroundColor = "transparent";
      document.getElementById("categoriesNav").style.backgroundColor = "transparent";
    }
  }

  return (
    <div className={classes.feedIntro}>
      <VisibilitySensor onChange={onChange}>
        <div className={classes.visibilityHook}>X</div>
      </VisibilitySensor>
      <div className={classes.introContainer}>
        <h3>Scroll and let the sound of heritage play</h3>
        <p>Explore the weekly selection of unique music data</p>
      </div>
    </div>
  );
}

export default Intro;
