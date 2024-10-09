import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "..";
import { ErrorResponse } from "react-router-dom";

// Создание asyncThunk для логина
export const login = createAsyncThunk(
  "auth/login",
  async (
    userCredentials: {
      email: string | undefined;
      password: string | undefined;
    },
    thunkAPI,
  ) => {
    try {
      const response = await axios.post<IUser>(
        "http://localhost:8800/api/auth/login",
        userCredentials,
      );
      return response.data; // Возвращаем данные при успехе
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data as ErrorResponse); // Отправляем ошибку при неудаче
    }
  },
);
