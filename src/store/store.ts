import { configureStore } from '@reduxjs/toolkit';
import theme from './reducers/theme';
import editorReducer from './reducers/editor';

const store = configureStore({
	reducer: {
		theme,
		editor: editorReducer,
		// ...
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
