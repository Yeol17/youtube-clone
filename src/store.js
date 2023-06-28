import { configureStore } from '@reduxjs/toolkit';
import theme from './store/settingThemeSlice'
import language from './store/settingLangSlice';

export const store = configureStore({
  reducer: {
    theme: theme.reducer,
    langs: language.reducer
  },
});





