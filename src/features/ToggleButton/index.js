import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { friendsView, chatView } from "./toggleButtonSlice";
import styled from "styled-components";

const Button  = styled.button`
  width: 200px;
  height: 30px;
`;

export default function ToggleButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleToFriendsListClick() {
    dispatch(friendsView());
    history.push("/friends");
  }

  function handleToChatListClick() {
    dispatch(chatView());
    history.push("/chats");
  }

  return (
    <>
      <Button onClick={handleToFriendsListClick}>friends</Button>
      <Button onClick={handleToChatListClick}>chat</Button>
    </>
  )
}
