import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAdmin:false,
	time: '',
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAdmin = action.payload.isAdmin;
			state.time = action.payload.time;
		}
	},
});

export const { login } = userSlice.actions;
export default userSlice.reducer;