import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatInput.css";
import db from "../firebase";
import { useStateValues } from "../context-api/StateProvider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState();
  const [{ user }] = useStateValues();

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <div className="chatInput_row">
          <div className="chatInput_Input">
            <input
              placeholder={`type to send message on ${channelName} thread`}
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
          </div>
          <div className="chatInput_Button">
            <Button type="submit" onClick={sendMessage}>
              SEND
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
