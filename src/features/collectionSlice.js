import { createSlice } from "@reduxjs/toolkit";

const getInitialCollection = () => {
  try {
    const data = localStorage.getItem("collection");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: getInitialCollection(),
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const exists = state.items.some(
        item => item.id === action.payload.id
      );
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    clearCollection: (state) => {
      state.items = [];
    },
  },
});


export const {
  addCollection,
  removeCollection,
  clearCollection
} = collectionSlice.actions;

export default collectionSlice.reducer;
