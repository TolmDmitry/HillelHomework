import classes from "./addButton.module.css";

function AddButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes[customClassName]}>
      {children}
    </button>
  );
}

export default AddButton;
