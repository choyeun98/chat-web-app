import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPartnerId, addChat } from "../profileListSlice/profileListSlice";
import styled from "styled-components";

const ChatHeader = styled.div`
  display: flex;

  button {
    width: 50px;
    height: 50px;
    margin-right: 100px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const ChatContainer = styled.div`
  padding: 15px;
`;

export default function ChatDetail() {
  const [chatInputValue, setChatInputValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const profileByIds = useSelector((state) => {
    return state.profile.byIds;
  });

  const chatPartnerId = useSelector((state) => {
    return state.profile.currentChatPartner;
  });

  const partnerName = profileByIds[chatPartnerId].name;

  function handleBackButtonClick() {
    dispatch(setPartnerId());
    history.push("/chats");
  }

  function handleChatContentsSubmit(e) {
    e.preventDefault();
    setChatInputValue("");

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    dispatch(addChat({
      id: chatPartnerId,
      chat: chatInputValue,
      user: "user",
      date: `${year}년 ${month.length === 1 ? 0 + month : month}월 ${date.length === 1 ? 0 + date : date}일`,
      time: `${hours}시 ${minutes}분`,
    }));
  }

  function handleChatInputChange(e) {
    setChatInputValue(e.target.value);
  }

  return (
    <>
      <ChatHeader>
        <button onClick={handleBackButtonClick}>&lt;</button>
        <p>{`${partnerName}님과의 대화`}</p>
      </ChatHeader>
      {profileByIds[chatPartnerId].chatList.map((chat, i) => {
        return (
          <ChatContainer key={i}>
            <p>{chat.chatBy}</p>
            <p>{chat.chat}</p>
            <p>{chat.date}</p>
            <p>{chat.time}</p>
          </ChatContainer>
        );
      })}
      <form onSubmit={handleChatContentsSubmit}>
        <input 
          placeholder="입력하세요"
          onChange={handleChatInputChange}
          value={chatInputValue}>
        </input>
      </form>
    </>
  );
}
