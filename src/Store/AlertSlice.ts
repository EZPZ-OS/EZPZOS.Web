import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
	isVisible: boolean;
	message: string | null;
	isError: boolean;
	navigateTo: string | null;
}

const initialState: AlertState = {
	isVisible: false,
	message: null,
	isError: false,
	navigateTo: null
};

const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		showAlert: (state, action: PayloadAction<{ message: string; isError?: boolean; navigateTo?: string }>) => {
			state.isVisible = true;
			state.message = action.payload.message;
			state.isError = action.payload.isError || false;
			state.navigateTo = action.payload.navigateTo ?? null;
		},
		hideAlert: state => {
			state.isVisible = false;
			state.message = null;
			state.isError = false;
			state.navigateTo = null;
		}
	}
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
