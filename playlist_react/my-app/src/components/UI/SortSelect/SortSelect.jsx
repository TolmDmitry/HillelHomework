import React from "react";
import classes from "./SortSelect.module.css";

const SortSelect = ({ setOrderBy }) => {
  return (
    <select
      className={classes.sortList}
      onChange={(event) => setOrderBy(event.target.value)}
    >
      <option value="null">Without sort</option>
      <option value="isLiked">Like</option>
      <option value="releaseDate">Year</option>
    </select>
  );
};

export default SortSelect;
