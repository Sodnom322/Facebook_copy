import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login } from "../AsyncActions";
import { IUser } from "../..";

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface IAuth {
  user: IUser | null;
  isFecthing: string;
  error: boolean | string | null;
}

const initialState: IAuth = {
  user: null,
  isFecthing: "",
  error: false,
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFecthing = Status.LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isFecthing = Status.SUCCESS;
        state.user = action.payload; // Здесь данные пользователя после успешного логина
      })
      .addCase(login.rejected, (state, action) => {
        state.isFecthing = Status.ERROR;
        state.error = action.payload as string; // Ошибка при логине
      });
  },
});

// Action creators are generated for each case reducer function

export default authSlice.reducer;
