import classes from "./MyProfile.module.css";
import avatar from "../../img/avatar.jpg";
export default function MyProfile({ name, rank, icon, ...props }) {
  return (
    <div className={classes.user}>
      <img src={avatar} alt="" style={{ width: "48px", height: "48px" }} />
      <img src={icon} className={classes.icon}/>
      <div style={{ marginLeft: "5px", marginRight: "5px" }}>
        <p className={classes.name} style={{ margin: "0px" }}>
          {name}
        </p>
        <p className={classes.rank} style={{ margin: "0px", marginTop: "5px" }}>
          Рейтинг: {rank}
        </p>
      </div>
    </div>
  );
}
