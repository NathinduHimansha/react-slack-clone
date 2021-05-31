import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import EditIcon from "@material-ui/icons/Edit";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useStateValues } from "../context-api/StateProvider";

function Sidebar() {
  //retriving data layer value
  const [{ user }] = useStateValues();
  const [channels, setChannels] = useState([]);

  //run this when loads
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      //looping through the rooms
      setChannels(
        snapshot.docs.map((doc) => ({
          //rooms id
          id: doc.id,
          //room -> data
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_infor">
          <h2>One Zero</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName ? user.displayName : "user"}
          </h3>
        </div>
        <EditIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="threads" />
      <SidebarOption Icon={InboxIcon} title="mentions and reactions" />
      <SidebarOption Icon={DraftsIcon} title="saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="people and user groups" />
      <SidebarOption Icon={AppsIcon} title="apps" />
      <SidebarOption Icon={FileCopyIcon} title="file browser" />
      <SidebarOption Icon={ExpandLessIcon} title="show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="channels" />
      <SidebarOption Icon={AddIcon} title="add channel" addChannelOption={true} />

      {/* connect to db and list all the channels */}
      {channels.map((channel) => (
        <SidebarOption Icon="" title={channel.name} key={channel.id} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
