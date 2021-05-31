import React from "react";
import "./SidebarOptions.css";
import { useHistory } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import db from "../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  //history use to change the link(by appending) URL by changing/accesiing the history(web browser tracks it)
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      //setting up the id to the link then it will catch on chat.js
      //localhost:3000/room/linkedin
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name: ");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    //   checking weather div is addchannel button or other(by props)
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash"># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
