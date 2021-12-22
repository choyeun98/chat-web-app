# Chat-App

Chat-App 은 사용자들이 간단하게 사용할수 있도록 만든 소셜 미디어 서비스 입니다.

## 설치

```
npm install
```

## 개발 서버 실행

```
npm start
// localhost:3000
```

## 기술 스택

- react
- redux 
- styled component  

## 작업 결과물의 구조 및 기능

- Chat-App 은 크게 친구 목록, 채팅 목록, 채팅방 이렇게 세 부분으로 나눌 수 있습니다.  
- 전역적으로 사용되는 친구 정보인 profile_list 는 redux 를 사용해 관리해 주었습니다.

### 친구 목록

![Chat-App](/readme-assets/friend_list.png)

- 친구 목록과 채팅 목록을 자유롭게 드나들기 위해 전환 버튼을 상단에 위치시켜 주었고 이 버튼은 채팅 목록 페이지에서도 재사용 해 주었습니다.
- 친구 검색 및 정렬이 가능합니다.
- 원하는 친구와 대화를 시작할 수 있습니다.

### 채팅 목록

![Chat-App](/readme-assets/chat_list.png)

- 채팅을 클릭하여 채팅방에 입장 가능합니다.
- 채팅 목록의 채팅은 최신 날짜 순서에 맞추어 정렬됩니다.

### 채팅방

![Chat-App](/readme-assets/chat_room.png)

- 채팅을 입력할 경우 입력된 채팅이 redux store에 저장 됩니다. 그 후 재렌더링이 되면서 저장된 내용까지 화면에 노출되게 됩니다.
- 입력된 채팅은 아래쪽으로 차례대로 보이게 됩니다.

## 기타 참고 사항

- 테스트 코드는 완성하지 못했습니다.

- Chat-App-Application 제목으로 creat-react-app  프로젝트를 생성하였는데 후에 과제를 검토하면서 생각해보니 web을 app으로 잘못 사용했다는 것을 깨달았습니다. <br />  
감사합니다.
