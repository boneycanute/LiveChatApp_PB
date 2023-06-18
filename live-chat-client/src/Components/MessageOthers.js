import React from "react";
import "./myStyles.css";
import { useDispatch, useSelector } from "react-redux";

function MessageOthers({ props }) {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  // console.log("message others : ", props);
  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>
          {props.sender.name[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            {props.sender.name}
          </p>
          <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>
            {props.content}
          </p>
          {/* <p className="self-timeStamp">12:00am</p> */}
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
