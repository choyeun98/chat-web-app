import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setPartnerId } from "../profileListSlice/profileListSlice";
import PropTypes from "prop-types";

const ChatButton = styled.button`
  width: 100px;
  height: 20px;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

export default function ChatStartButton({ userId }) {
  const dispatch = useDispatch();

  function handleChatStartButtonClick() {
    dispatch(setPartnerId(userId));
  }

  return <ChatButton onClick={handleChatStartButtonClick}>대화하기</ChatButton>
}

ChatStartButton.propTypes = {
  userId: PropTypes.number.isRequired,
}
