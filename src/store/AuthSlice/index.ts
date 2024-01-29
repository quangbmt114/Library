import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
interface state {
  state: boolean | null;
}
const initialState: state = {
  state: null,
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
