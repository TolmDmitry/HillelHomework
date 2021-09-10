import classes from "./LikeButton.module.css";

function LikeButton({likeSong, song, customClassName}) {
  return (
    <button
      className={classes[customClassName]}
      onClick={() => likeSong(song.name)}
    >
      Like
    </button>
  );
}

export default LikeButton;
