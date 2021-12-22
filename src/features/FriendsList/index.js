import ToggleButton from "../ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { ascendingSort, descendingSort } from "../profileListSlice/profileListSlice";
import { useRef, useState } from "react";
import ChatStartButton from "../ChatStartButton";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 15px;
`;

const ProfileImage = styled.img`
  width: 50px;
  margin-right: 20px;
`;

const ProfileName = styled.p`
  width: 180px;
`;

const SortButton = styled.button`
  position: absolute;
  top: 45px;
  left: 320px;
  border: none;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

export default function FriendsList() {
  const [shouldAscendingSort, setShouldAscendingSort] = useState(true);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchName, setSearchName] = useState("");
  const buttonRef = useRef();
  const dispatch = useDispatch();

  const profile = useSelector((state) => {
    return state.profile;
  });

  const profileAllIds = profile.allIds;
  const profileByIds = profile.byIds;
  
  const searchedId = profileAllIds.filter((id) => {
    return profileByIds[id].name === searchName;
  })[0];

  function handleSearchNameSubmit(e) {
    e.preventDefault();
    setSearchName(searchInputValue);
    setSearchInputValue("");
  }

  function handleSearchInputChange(e) {
    setSearchInputValue(e.target.value);
  }

  function handleFriendsSortClick() {
    if (shouldAscendingSort) {
      dispatch(ascendingSort());
      buttonRef.current.innerText = "내림차순 정렬";
      setShouldAscendingSort(false);
    } else {
      dispatch(descendingSort());
      buttonRef.current.innerText = "오름차순 정렬";
      setShouldAscendingSort(true);
    }
  }

  return (
    <>
      <ToggleButton />
      <form onSubmit={handleSearchNameSubmit}>
        <input 
          placeholder="검색하기"
          onChange={handleSearchInputChange}
          value={searchInputValue}
        />
      </form>
      <SortButton
        onClick={handleFriendsSortClick}
        ref={buttonRef}
      >
        오름차순 정렬
      </SortButton>
      {searchName &&
        <ProfileWrapper>
          <ProfileImage src={profileByIds[searchedId]?.image} alt="profile" />
          <ProfileName>{profileByIds[searchedId]?.name}</ProfileName>
          {profileByIds[searchedId] && <ChatStartButton userId={searchedId} />}
        </ProfileWrapper>
      }
      {!searchName &&
        profileAllIds.map((id) => {
        return (
          <ProfileWrapper key={id}>
            <ProfileImage src={profileByIds[id].image} alt="profile" />
            <ProfileName>{profileByIds[id].name}</ProfileName>
            <ChatStartButton userId={id} />
          </ProfileWrapper>
        )
      })}
    </>
  )
}
