import React from "react";
import classes from "./SongInput.module.css";

const SongInput = (props) => {
  return <input {...props} className={classes.song__input} />;
};

export default SongInput;
