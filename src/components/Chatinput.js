import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import StrikethroughSOutlinedIcon from "@material-ui/icons/StrikethroughSOutlined";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { AttachFile } from "@material-ui/icons";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here.." />
          <SendButton>
            <Send />
          </SendButton>
        </form>
      </InputContainer>
      <AdditionalButtons>
        <Left>
          {/* <OfflineBoltOutlinedIcon style={{ color: "#9e9e9e" }} /> */}
          <Bolt />
          <Bold />
          <Italic />
          <StrikeThrough />
          <Code />
          <Link />
          <Bullets />
          <Numbers />
          {/* <FormatBoldIcon style={{ color: "#9e9e9e" }} />
          <FormatItalicIcon style={{ color: "#d9d9d9" }} />
          <StrikethroughSOutlinedIcon style={{ color: "#9e9e9e" }} />
          <CodeIcon style={{ color: "#9e9e9e" }} />
          <LinkIcon style={{ color: "#9e9e9e" }} />
          <FormatListBulletedIcon style={{ color: "#9e9e9e" }} />
          <FormatListNumberedIcon style={{ color: "#9e9e9e" }} /> */}
        </Left>
        <Right>
          <Emoji />
          <AttachFiles />
          {/* <SentimentSatisfiedOutlinedIcon style={{ color: "#9e9e9e" }} />
          <AttachFileIcon style={{ color: "#9e9e9e" }} /> */}
        </Right>
      </AdditionalButtons>
    </Container>
  );
}
export default ChatInput;
const Bolt = styled(OfflineBoltOutlinedIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Bold = styled(FormatBoldIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Italic = styled(FormatItalicIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const StrikeThrough = styled(StrikethroughSOutlinedIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Code = styled(CodeIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Link = styled(LinkIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Bullets = styled(FormatListBulletedIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Numbers = styled(FormatListNumberedIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Emoji = styled(SentimentSatisfiedOutlinedIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const AttachFiles = styled(AttachFileIcon)`
  color: #9e9e9e;
  margin-right: 10px;
  cursor: pointer;
`;
const Left = styled.div`
  padding: 8px;
`;
const Right = styled.div``;
const AdditionalButtons = styled.div`
  border-left: 1px solid #8d8d8e;
  border-right: 1px solid #8d8d8e;
  border-bottom: 1px solid #8d8d8e;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
`;
const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
`;
const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: solid 2px #e8eaf6;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
    }
    input:focus {
      outline: none;
    }
  }
`;
const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #148567;
  }
`;
const Send = styled(SendIcon)`
  color: #d9d9d9;
`;
