import classes from "./header.module.css";
import logo from "../../img/converted.svg";

import clipper from "../../img/clipper.svg";
import MyProfile from "../profile/MyProfile";
export default function MyHeader(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" style={{ marginLeft: "32px" }} />
      <button className={classes.btn}>Играть</button>
      <div className={classes.user}>
        <MyProfile />
        <img src={clipper} alt="" />
      </div>
    </header>
  );
}
