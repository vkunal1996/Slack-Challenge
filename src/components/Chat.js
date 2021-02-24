import React from "react";
import styled from "styled-components";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
function Chat() {
  return (
    <Container>
      <ChatHeader>
        <HeaderTopRow>
          <ChannelName>
            # Channel 1<StarOutlineIcon style={{ height: 18 + "px" }} />
          </ChannelName>
          <ChannelDetails>
            <DetailsText>Details</DetailsText>
            <DetailsIcons>
              <InfoOutlinedIcon style={{ height: 35 + "px" }} />
            </DetailsIcons>
          </ChannelDetails>
        </HeaderTopRow>
        <HeaderBottomRow>
          Company-wide announcements and work-based matters
        </HeaderBottomRow>
      </ChatHeader>
      <ChatBlock></ChatBlock>
    </Container>
  );
}
export default Chat;
const Container = styled.div`
  width: 99%;
  border-right: solid 1px #e8eaf6;
  display: grid;
  grid-template-rows: 80px auto;
`;
const ChatHeader = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  font-size: 15px;
  background-color: #e8eaf6;
`;
const ChatBlock = styled.div``;
const HeaderBottomRow = styled.div`
  padding-left: 17px;
  font-size: small;
  border-bottom: solid 3px 3px #e8eaf6;
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
