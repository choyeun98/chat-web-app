import ToggleButton from "../ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { setPartnerId } from "../profileListSlice/profileListSlice";
import styled from "styled-components";

const ChatProfileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const ProfileName = styled.p`
  width: 180px;
`;

const ChatContents = styled.p`
  width: 300px;
  height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 13px;
`;

const ChatDate = styled.p`
  font-size: 12px;
`;

export default function ChatList() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => {
    return state.profile;
  });

  const profileAllIds = profile.allIds;
  const profileByIds = profile.byIds;
  const copyProfileAllIds = [...profileAllIds];

  copyProfileAllIds.sort((a, b) => {
    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(0, 4)
      < profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(0, 4)) return 1;
    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(0, 4)
      > profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(0, 4)) return -1;

    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(6, 8)
      < profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(6, 8)) return 1;
    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(6, 8)
      > profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(6, 8)) return -1;

    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(10, 12)
      < profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(10, 12)) return 1;
    if (profileByIds[a].chatList[profileByIds[a].chatList.length - 1].date.slice(10, 12)
      > profileByIds[b].chatList[profileByIds[b].chatList.length - 1].date.slice(10, 12)) return -1;
  });

  return (
    <>
      <ToggleButton />
      {copyProfileAllIds.map((id) => {
        return (
          <ChatProfileWrapper key={id} onClick={() => dispatch(setPartnerId(id))}>
            <ProfileImage src={profileByIds[id].image} alt="profile" />
            <ProfileName>{profileByIds[id].name}</ProfileName>
            <ChatContents>
              {profileByIds[id].chatList[profileByIds[id].chatList.length - 1].chat}
            </ChatContents>
            <ChatDate>
              {profileByIds[id].chatList[profileByIds[id].chatList.length - 1].date}
            </ChatDate>
          </ChatProfileWrapper>
        )
      })}
    </>
  )
}
