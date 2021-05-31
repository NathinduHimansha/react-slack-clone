import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  // useParams takes the data from url
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  //runs when room Id changes(link (history.push in slidebaroptions))
  useEffect(() => {
    if (roomId) {
      //saves the name in roomDetails
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));

      //saves msgs
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())));
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {/* messages */}

        {roomMessages?.map(({ message, timestamp, user, userImage }) => (
          <Message message={message} timestamp={timestamp} user={user} userImage={userImage} />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
