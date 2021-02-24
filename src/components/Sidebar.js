import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";
import AddIcon from "@material-ui/icons/Add";
import { channelDataItems } from "../data/ChannelData";
import db from "../firebase";

function Sidebar(props) {
  console.log(props);
  const addChannel = () => {
    const promptName = prompt("Enter Channel Name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>GenuinelyGeek</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} style={{ cursor: "pointer" }} />
        </NewChannelContainer>
        <ChannelList>
          {props.rooms.map((item) => (
            <Channel># {item.name}</Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}
export default Sidebar;
const Container = styled.div`
  background: #3f0e40;
  background: #332940;
`;
const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
  border-top: 1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background-color: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;
const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
const MainChannels = styled.div`
  padding-top: 20px;
`;
const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;
const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;
const ChannelList = styled.div`
  cursor: pointer;
`;
const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
