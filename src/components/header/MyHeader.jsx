import classes from "./header.module.css";
import logo from "../../img/converted.svg";
import avatar from '../../img/avatars/avatar-1.jpg'

import clipper from "../../img/clipper.svg";
import MyProfile from "../profile/MyProfile";
import MyButton from "../ui/MyButton";
export default function MyHeader(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" style={{ marginLeft: "32px" }} />
      <MyButton  color='green' size='normal'>Играть</MyButton>
      <div className={classes.user}>
        <MyProfile name={'Paromovevg'} avatar={avatar} rank={1230} />
        <img src={clipper} alt="" />
      </div>
    </header>
  );
}
