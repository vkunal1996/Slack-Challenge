import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./Chatinput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";
function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        user: user.name,
        userImage: user.photo,
        timestamp: firebase.firestore.Timestamp.now(),
      };
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  useEffect(() => {
    const getMessages = () => {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snap) => {
          let messages = snap.docs.map((msg) => msg.data());
          setMessages(messages);
        });
    };
    const getChannel = () => {
      db.collection("rooms")
        .doc(channelId)
        .onSnapshot((snapshot) => {
          setChannel(snapshot.data());
          console.log(snapshot.data());
        });
    };
    getChannel();
    getMessages();
  }, [channelId]);
  return (
    <Container>
      <ChatHeader>
        <HeaderTopRow>
          <ChannelName>
            # {channel && channel.name}
            <StarOutlineIcon style={{ height: 18 + "px" }} />
          </ChannelName>
          <ChannelDetails>
            <DetailsText>
              <div>Details</div>
            </DetailsText>
            <DetailsIcons>
              <InfoOutlinedIcon style={{ height: 35 + "px" }} />
            </DetailsIcons>
          </ChannelDetails>
        </HeaderTopRow>
        <HeaderBottomRow>
          Company-wide announcements and work-based matters
        </HeaderBottomRow>
      </ChatHeader>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput sendMessage={sendMessage}></ChatInput>
    </Container>
  );
}
export default Chat;
const Container = styled.div`
  width: 99%;
  border-right: solid 1px #e8eaf6;
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;
const ChatHeader = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  font-size: 15px;
  border-bottom: solid 2px #e8eaf6;
`;
const HeaderBottomRow = styled.div`
  padding-left: 17px;
  font-size: small;
  color: gray;
`;
const HeaderTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 17px;
  padding-right: 17px;
`;
const ChannelName = styled.div`
  font-weight: bold;
  cursor: pointer;
`;
const ChannelDetails = styled.div`
  color: gray;
  font-size: 15px;
  display: flex;
  cursor: pointer;
`;
const DetailsText = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const DetailsIcons = styled.div`
  display: flex;
  align-items: center;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
