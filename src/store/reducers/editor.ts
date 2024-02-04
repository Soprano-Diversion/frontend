import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	file: {
		name: '',
		dsl: '',
		html: '',
		react: '',
	},
	language: 'html' as 'dsl' | 'html' | 'react',
};

const editorSlice = createSlice({
	name: 'editor',
	initialState,
	reducers: {
		updateCode(state, action: PayloadAction<{ name: string; code: { dsl: string; html: string; react: string } }>) {
			state.file = {
				name: action.payload.name,
				...action.payload.code,
			};
		},

		updateCodeLanguage(state, action: PayloadAction<'dsl' | 'html' | 'react'>) {
			state.language = action.payload;
		},

		updateSpecificCode(state, action: PayloadAction<{ code: string; language: 'dsl' | 'html' | 'react' }>) {
			state.file[action.payload.language] = action.payload.code;
		},
	},
});

export const { updateCode, updateCodeLanguage, updateSpecificCode } = editorSlice.actions;

export default editorSlice.reducer;
