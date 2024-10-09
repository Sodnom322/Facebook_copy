import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
const Register = () => {
  interface IForm {
    username: string;
    email: string;
    password: string;
    passwordAgain: string;
  }
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.authSlice);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IForm>({
    defaultValues: {},
    mode: "onSubmit",
  });

  const passAg = watch("passwordAgain");

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        data,
      );
      navigate("/login");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  const validateEmail = (value: string) => {
    // Проверяем, что email содержит хотя бы одну заглавную букву
    const containsUppercase = /[A-Z]/.test(value);
    if (!containsUppercase) {
      return "1 заглавная буква";
    }

    // Проверяем формат email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      return "Некорректная почта";
    }

    return true; // Если все проверки пройдены
  };

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
            onSubmit={handleSubmit(onSubmit)}
            className="h-96  bg-white rounded-md flex flex-col "
          >
            <div className="flex flex-col justify-center relative pb-5">
              <input
                {...register("username", {
                  required: "Обязательное поле",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 буквы",
                  },
                })}
                className="h-12 rounded-lg border border-gray-400 outline-none text-xl  pl-5"
                type="text"
                placeholder="Username"
              />
              {errors.username && (
                <span className="text-sm text-red-400 absolute left-32 font-medium  bottom-0">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center relative pb-5">
              <input
                {...register("email", {
                  required: "Обязательное поле",

                  validate: (el) => validateEmail(el),
                })}
                className="h-12 rounded-lg border border-gray-400 outline-none  text-xl pl-5"
                placeholder="Email"
              />
              {errors.email && (
                <span className="text-sm text-red-400 absolute left-32  font-medium  bottom-0">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center relative pb-5">
              <input
                {...register("password", {
                  required: "Обязательное поле",
                  validate: (val) => val === passAg || "Пароли несовпадают",
                })}
                className="h-12 rounded-lg border border-gray-400 outline-none  text-xl pl-5"
                type="password"
                placeholder="Passwrod"
              />
              {errors.password && (
                <span className="text-sm text-red-400 absolute left-32  font-medium  bottom-0">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center relative pb-5">
              <input
                {...register("passwordAgain", {
                  required: "Обязательное поле",
                })}
                className="h-12 rounded-lg border border-gray-400 outline-none  text-xl pl-5"
                type="password"
                placeholder="Password again"
              />
              {errors.passwordAgain && (
                <span className="text-sm text-red-400 absolute left-32 font-medium  bottom-0">
                  {errors.passwordAgain.message}
                </span>
              )}
            </div>
            <button className="h-12 rounded-lg border-none bg-blue-500  mb-3 text-white text-lg font-medium cursor-pointer hover:bg-blue-600 transition-all">
              Sign Up
            </button>
            <button className="h-12 rounded-lg border-none bg-green-500 text-white text-lg font-medium cursor-pointer hover:bg-green-600 transition-all">
              Login into account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
