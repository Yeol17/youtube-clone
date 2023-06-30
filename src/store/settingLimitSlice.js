import { createSlice } from "@reduxjs/toolkit";

const limited = createSlice({
  name: 'settingLimit',
  initialState: {
    title: '제한 모드',
    isLimited: false,
  },
  reducers: {
    changeLimited(state) {
      state.isLimited = !state.isLimited
    }
  }
})

export const { changeLimited } = limited.actions;
export default limited;