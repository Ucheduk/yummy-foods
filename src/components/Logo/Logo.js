import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
    {!props.show ? <h1>Yummy Foods</h1> : null}
  </div>
);

export default logo;
