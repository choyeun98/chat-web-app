import { createSlice } from "@reduxjs/toolkit";
import ProfileList from "../../data.json";

const initialState = ProfileList;

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addChat: (state, action) => {
      const { id, chat, user, date, time } = action.payload;

      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            chatList: [
              ...state.byIds[id].chatList,
              {
                chat,
                chatBy: user,
                date,
                time,
              }
            ],
          },
        },
      }
    },

    setPartnerId: (state, { payload: id }) => {
      return {
        ...state,
        currentChatPartner: id,
      }
    },

    ascendingSort: (state) => {
      state.allIds.sort((a, b) => {
        if (state.byIds[a].name < state.byIds[b].name) return -1;
        else if (state.byIds[a].name === state.byIds[b].name) return 0;
        else return 1;
      });
    },

    descendingSort: (state) => {
      state.allIds.sort((a, b) => {
        if (state.byIds[a].name > state.byIds[b].name) return -1;
        else if (state.byIds[a].name === state.byIds[b].name) return 0;
        else return 1;
      });
    },
  },
});

export const { addChat, setPartnerId, ascendingSort, descendingSort } = profileSlice.actions;

export default profileSlice.reducer;
