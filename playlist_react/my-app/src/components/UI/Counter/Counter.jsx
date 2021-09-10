import classes from "./Counter.module.css";

function Counter({ songs, customClassName }) {
  return (
    <p className={classes[customClassName]}>
      Count of songs: <span className="count-title span"> {songs.length} </span>
    </p>
  );
}

export default Counter;
