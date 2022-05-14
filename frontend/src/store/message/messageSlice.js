import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
	name: "message",
	initialState: {
		message: "",
	},
	reducers: {
		setMessage: (state, action) => {
			return { message: action.payload };
		},
		clearMessage: () => {
			return { message: "" };
		},
	},
	extraReducers: {},
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const messageSelector = state => state.message;