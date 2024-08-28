import classes from "./GameInfo.module.css";
import MyProfile from "../profile/MyProfile";
import X from "../../img/icons/X.svg";
import O from "../../img/icons/O.svg";
import square from "../../img/icons/square.svg";
import triangle from "../../img/icons/triangle.svg";
import avatar1 from "../../img/avatars/avatar-1.jpg";
import avatar2 from "../../img/avatars/avatar-2.png";
import avatar3 from "../../img/avatars/avatar-3.png";
import avatar4 from "../../img/avatars/avatar-4.png";
export default function GameInfo({ playersCount, ...props }) {
  const players = [
    { id: 1, name: "Paromovevg", rating: 1230, avatar: avatar1, icon: X },
    {
      id: 2,
      name: "VereIntending...",
      rating: 850,
      avatar: avatar2,
      icon: triangle,
    },
    { id: 3, name: "Lara", rating: 1370, avatar: avatar3, icon: O },
    { id: 4, name: "Додик", rating: 760, avatar: avatar4, icon: square },
  ];
  function Bar({ isRight, playerInfo }) {
    return isRight ? (
      <>
        <p className={classes.p && classes.r}>01:18</p>
        <MyProfile
          name={playerInfo.name}
          rank={playerInfo.rating}
          avatar={playerInfo.avatar}
          icon={playerInfo.icon}
        />
      </>
    ) : (
      <>
        <MyProfile
          name={playerInfo.name}
          rank={playerInfo.rating}
          avatar={playerInfo.avatar}
          icon={playerInfo.icon}
        />
        <p className={classes.p && classes.l}>01:18</p>
      </>
    );
  }
  return (
    <>
      <div className={classes.border} style={{ marginTop: "25px" }}>
        <div className={classes.Group}>
          {players.slice(0, playersCount).map((player, index) => (
            <Bar key={index} isRight={index % 2} playerInfo={player} />
          ))}
        </div>
      </div>
    </>
  );
}
