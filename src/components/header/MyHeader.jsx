import classes from "./header.module.css";
import logo from "../../img/converted.svg";
import avatar from '../../img/avatar.jpg'
import clipper from '../../img/clipper.svg'
export default function MyHeader(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" style={{ marginLeft: "32px" }} />
      <button className={classes.btn}>Играть</button>
      <div className={classes.user}>
        <img src={avatar} alt="" style={{width: '48px', height:'48px'}}/>
        <div style={{marginLeft:'5px',marginRight:'5px'}}>
            <p className={classes.name} style={{margin:'0px'}}>Paromovevg</p>
            <p className={classes.rank} style={{margin:'0px',marginTop:'5px'}}>Рейтинг: 1230</p>
        </div>
        <img src={clipper} alt="" />
      </div>
    </header>
  );
}
