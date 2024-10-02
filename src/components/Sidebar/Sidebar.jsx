import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompts}=useContext(Context)

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>{setExtended(!extended)}} className="menu" src={assets.menu_icon} alt="menu icon" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>new chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
                return (
                    <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.splice(0,18)}</p>
            </div>
                )
            })}
          
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
          
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
