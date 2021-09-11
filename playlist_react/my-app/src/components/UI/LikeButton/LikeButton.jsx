import classes from "./LikeButton.module.css";

function LikeButton({ likeSong, song, customClassName, textContent }) {
  return (
    <button
      className={classes[customClassName]}
      onClick={() => likeSong(song.id)}
    >
      {textContent}
    </button>
  );
}

export default LikeButton;
