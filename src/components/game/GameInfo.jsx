import classes from "./GameInfo.module.css";
import MyProfile from "../profile/MyProfile";
import X from '../../img/icons/X.svg'
import O from '../../img/icons/O.svg'
import square from '../../img/icons/square.svg' 
import triangle from '../../img/icons/triangle.svg'
export default function GameInfo(props) {
  return (
    <div className={classes.border} style={{ marginTop: "25px" }}>
      <MyProfile name={'Paromovevg'} rank={1230} icon={X}/>
      <p className={classes.p && classes.l}>01:18</p>
      <p className={classes.p && classes.r}>00:08</p>
      <MyProfile name={'VereIntending...'} rank={850} icon={triangle}/>
    </div>
  );
}
