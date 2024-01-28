import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
interface state {
  state: boolean;
}
const initialState: state = {
  state: false,
};
const AuthState = createSlice({
  name: "authState",
  initialState,
  reducers: {
    changeState(state, action) {
      state.state = action.payload;
    },
  },
});
export const { changeState } = AuthState.actions;
export const authState = (state: RootState) => state.authState.state;
export default AuthState.reducer;
