import React from "react";
import classes from "./AddNewSongModal.module.css";

const NewSongModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.todoModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.todoModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default NewSongModal;
