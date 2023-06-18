import React from "react";

function MessageSelf({ props }) {
  // console.log("Message self Prop : ", props);
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.content}</p>
        {/* <p className="self-timeStamp" style={{ color: "black" }}>
          12:00am
        </p> */}
      </div>
    </div>
  );
}

export default MessageSelf;
