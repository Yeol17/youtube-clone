import { configureStore } from '@reduxjs/toolkit';
import theme from './store/settingThemeSlice'
import language from './store/settingLangSlice';
import limited from './store/settingLimitSlice';
import location from './store/settingLocationSlice';

export const store = configureStore({
  reducer: {
    theme: theme.reducer,
    langs: language.reducer,
    limit: limited.reducer,
    location: location.reducer,
  },
});





