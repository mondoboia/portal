import React from "react";
import classes from "./Section.module.css";
import SectionResults from "./SectionResults";

function Section(props) {

    return (
        <div id = {props.id} ref={props.ref} className={classes.sectionContainer}>
            {props.children}
            <SectionResults/>
        </div>
    )
}

export default Section;