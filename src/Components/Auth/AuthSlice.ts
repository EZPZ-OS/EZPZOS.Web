import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isOTPVerified: boolean;
  mobileNumber: string | null;
}

const initialState: AuthState = {
  isOTPVerified: false,
  mobileNumber: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOTPVerified(state, action: PayloadAction<boolean>) {
      state.isOTPVerified = action.payload;
    },
    setMobileNumber(state, action: PayloadAction<string>) {
      state.mobileNumber = action.payload;
    },
  },
});

export const { setOTPVerified, setMobileNumber } = authSlice.actions;
export default authSlice.reducer;