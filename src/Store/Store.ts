import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import alertReducer from "./AlertSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		alert: alertReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
