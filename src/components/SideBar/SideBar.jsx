import React from "react";
import "./SideBar.scss";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const SideBar = () => {
  return (
    <div className='side-bar'> 
      <LanguageSwitch divClassName='sidebar__language-box' idClassName='sidebar-id'/>
    </div>
  )
};

export default SideBar;
