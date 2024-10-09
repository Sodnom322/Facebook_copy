import { useEffect, useRef, useState } from "react";
import { login } from "../redux/AsyncActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { user, isFecthing, error } = useSelector(
    (state: RootState) => state.authSlice,
  );
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      login({
        email: email.current?.value,
        password: password.current?.value,
      }),
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  console.log(error);

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="grow flex flex-col justify-center">
          <h3 className="font-bold text-7xl text-blue-500 mb-3">Facebook</h3>
          <span className="text-2xl">
            Connetct with friends and the world around with Facebook!
          </span>
        </div>
        <div className="grow flex flex-col justify-center">
          <form
            onSubmit={handleClick}
            className="h-80 p-5 bg-white rounded-md flex relative flex-col justify-between"
          >
            <span className="absolute top-0 text-red-500 text-sm">{error}</span>
            <input
              className="h-12 rounded-lg border border-gray-400 outline-none text-xl pl-5"
              type="email"
              ref={email}
              placeholder="Email"
            />
            <input
              className="h-12 rounded-lg border border-gray-400 outline-none text-xl pl-5"
              type="password"
              ref={password}
              placeholder="Password"
            />
            <button
              disabled={isFecthing === "loading"}
              className="h-12 rounded-lg disabled:cursor-not-allowed border-none bg-blue-500 text-white text-lg font-medium cursor-pointer hover:bg-blue-600 transition-all"
            >
              {isFecthing === "loading" ? (
                <CircularProgress color="inherit" size={28} />
              ) : (
                "Log in"
              )}
            </button>
            <span className="text-center text-blue-500 cursor-pointer hover:scale-105 transition-all">
              Forgot password?
            </span>
            <button className="h-12 rounded-lg border-none bg-green-500 text-white text-lg font-medium cursor-pointer hover:bg-green-600 transition-all">
              {isFecthing === "loading" ? (
                <CircularProgress color="inherit" size={28} />
              ) : (
                "Create a new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
