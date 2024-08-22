import classes from "./MyButton.module.css";
/*
size: "small" | "normal"
color: "green" | "white"
*/
export default function MyButton({ size, color, children, ...props }) {
  function classGetter(size, color) {
    if (color === "green") {
      if (size === "normal") {
        return classes.green + " " + classes.normal;
      } else {
        return classes.green + " " + classes.small;
      }
    } else {
      if (size === "normal") {
        return classes.white + " " + classes.normal;
      } else {
        return classes.white + " " + classes.small;
      }
    }
  }
  return (
    <button {...props} className={classes.btn + " " + classGetter(size, color)}>
      {children}
    </button>
  );
}
