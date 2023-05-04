import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAdmin:false
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAdmin = action.payload.isAdmin;
		}
	},
});

export const { login } = userSlice.actions;
export default userSlice.reducer;