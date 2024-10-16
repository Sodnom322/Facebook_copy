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
  user: {
    profilePicture: "http://localhost:5173/src/assets/person/1.jpeg",
    coverPicture: "http://localhost:5173/src/assets/post/10.jpeg",
    followers: ["66cb0f46dca57d13a6d7aadf", "66cb16ba48f0081798855a5f"],
    followings: ["66cb16ba48f0081798855a5f"],
    isAdmin: false,
    _id: "66cb1a3fb79fb9191d3fe21b",
    username: "Han",
    email: "Han@gmail.com",

    createdAt: "2024-08-25T11:49:19.661Z",

    desc: "This is Han desc",
    from: "Vietnam",
    relationship: "2",
    city: "Korea",
  },
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
