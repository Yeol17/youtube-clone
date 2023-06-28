import { createSlice } from "@reduxjs/toolkit";

const design = {
  title: '디자인',
  selected: '기기 테마',
  desc: '이 브라우저에서만 설정이 적용됩니다.',
  contents: [
    { id: 0, theme: '기기 테마' },
    { id: 1, theme: '어두운 테마' },
    { id: 2, theme: '밝은 테마' },
  ]
}

const theme = createSlice({
  name: 'settingTheme',
  initialState: design,
  reducers: {
    changeTheme(state, action) {
      state.selected = action.payload.theme
    }
  }
});

export const { changeTheme } = theme.actions;
export default theme;
