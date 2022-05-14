import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from '../../services/auth';
import { setMessage } from '../message/messageSlice';
const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
	"user/register",
	async({ firstName, lastName, email, password}, thunkAPI) => {
		try {
			const registeredUser = await authService.register(firstName, lastName, email, password)
			console.log(registeredUser);
			thunkAPI.dispatch(setMessage("user registered successfully"));
			return { message: "user registered successfully"}
		} catch (e) {
			const message = e.message;
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		} 
	}	
)

export const login = createAsyncThunk(
	"user/login",
	async ({ email, password }, thunkAPI) => {
		try {
			const user = await authService.login(
				email,
				password
			);
			console.log(user);
			thunkAPI.dispatch(setMessage("user successfully logged in"));
			
			return { user: user.user }
		} catch (e) {
			const message = e.message;
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk("user/logout", async () => {
	await authService.logout();
});


const initialState = user ? { isLoggedIn: true, user: user.user }
:{ isLoggedIn: false, user: null }

console.log(user);

export const userSlice = createSlice({
	name: "user",
	initialState,
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.user = null;
			state.isLoggedIn = false;
			
		},
		[register.rejected]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		},
		[login.fulfilled]: (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload.user;
			
		},
		[login.rejected]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		},
		[logout.fulfilled]: (state, action) => {
			state.isLoggedIn = false;
			state.user = null;
		},
	},
});




export const { reducer } = userSlice;
export const userSelector = state => state.user;
