import React from "react";
import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./Chatinput";
import ChatMessage from "./ChatMessage";
function Chat() {
  return (
    <Container>
      <ChatHeader>
        <HeaderTopRow>
          <ChannelName>
            # Channel 1<StarOutlineIcon style={{ height: 18 + "px" }} />
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
        <ChatMessage />
      </MessageContainer>
      <ChatInput></ChatInput>
    </Container>
  );
}
export default Chat;
const Container = styled.div`
  width: 99%;
  border-right: solid 1px #e8eaf6;
  display: grid;
  grid-template-rows: 64px auto min-content;
`;
const ChatHeader = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  font-size: 15px;
  border-bottom: solid 2px #e8eaf6;
`;
const ChatBlock = styled.div``;
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
const MessageContainer = styled.div``;
