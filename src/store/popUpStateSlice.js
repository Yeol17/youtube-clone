import { createSlice } from '@reduxjs/toolkit';

const popUp = createSlice({
  name: 'popUpStates',
  initialState: {
    isLimitMode: false,
    shortcutOpend: false,
  },
  reducers: {
    shortcutChange(state) {
      state.shortcutOpend = !state.shortcutOpend;
    }
  }
})

export const { shortcutChange } = popUp.actions;
export default popUp 