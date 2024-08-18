import classes from "./MyProfile.module.css";
import avatar from "../../img/avatar.jpg";
export default function MyProfile(props) {
  return (
    <>
      <img src={avatar} alt="" style={{ width: "48px", height: "48px" }} />
      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <p className={classes.name} style={{ margin: "0px" }}>
          Paromovevg
        </p>
        <p className={classes.rank} style={{ margin: "0px", marginTop: "5px" }}>
          Рейтинг: 1230
        </p>
      </div>
    </>
  );
}
