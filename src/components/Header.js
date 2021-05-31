import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValues } from "../context-api/StateProvider";

function Header() {
  //retriving data layer value
  const [{ user }] = useStateValues();

  return (
    <div className="header">
      <div className="header_left">
        {/* avtar for logged in user */}
        <Avatar
          className="header_avtar"
          alt={user?.displayName}
          src={user?.photoURL}
          // alt="nathindu "
          // src=""
        />
        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        {/* search icon */}
        <SearchIcon />
        {/* search input */}
        <input placeholder="Search What  you want" />
      </div>
      <div className="header_right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
