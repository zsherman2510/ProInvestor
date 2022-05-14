import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users/userSlice";
import { messageSlice } from "./message/messageSlice"
export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		message: messageSlice.reducer
	},
});
