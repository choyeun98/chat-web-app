import React from "react";
import { Redirect, Route } from 'react-router-dom';
import FriendsList from "./features/FriendsList/index";
import { useSelector } from "react-redux";
import ChatList from "./features/ChatList";
import ChatDetail from "./features/ChatDetail/ChatDetail";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  width: 400px;
`;

function App() {
  const chatPartnerId = useSelector((state) => {
    return state.profile.currentChatPartner;
  });

  return (
    <Container>
      <Route path="/friends">
        {!chatPartnerId &&  <FriendsList />}
        {chatPartnerId && <ChatDetail />}
      </Route>
      <Route path="/chats">
        {!chatPartnerId && <ChatList />}
        {chatPartnerId && <ChatDetail />}
      </Route>
      <Route path="/">
        <Redirect to="/friends" />
      </Route>
    </Container>
  );
}

export default App;
