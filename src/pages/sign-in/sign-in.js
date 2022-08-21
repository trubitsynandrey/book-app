import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../components";

export const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const setTrueOnTime = (setName, ms = 1500) => {
    setName(true);
    setTimeout(() => {
      setName(false);
    }, ms);
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log("submitted");
    setIsError(false)
    if (email && password) {
      try {
        fetch(
          `https://internsapi.public.osora.ru/api/auth/login?email=${email}&password=${password}`,
          {
            method: "POST",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res, "authres");
            if (res?.status === true) {
              // coockie access
              Cookies.set('ACCESS', res.data.access_token)
              navigate("/app")
            } else {
              const errorMessage = res?.errors;
              setErrorMessage(errorMessage);
              setTrueOnTime(setIsError, 2000);
            }
            return res.data;
          });
      } catch (e) {
        console.log(e, "errorMessage");
      }
    } else {
      setErrorMessage("All fields are required");
      setTrueOnTime(setIsError, 2000);
    }
  };

  const onChangeInput = (e, changeInput) => {
    changeInput(e.target.value);
  };

  return (
    <div className="relative px-[10%] h-[100vh] flex items-center">
      <div
        data-error={isError}
        className="text-white text-[12px] absolute top-[-40px] text-center w-[80%] left-1/2 transform -translate-x-1/2 bg-alert flex h-[36px] items-center pl-[12px] opacity-0 transition-all"
      >
        <div>
          <Alert />
        </div>
        <p className="ml-[10px]">{errorMessage}</p>
      </div>
      <form className="w-full" onSubmit={onSubmitHandle}>
        <p className="text-[32px] mb-[50px]">Login</p>
        <div className="flex flex-col w-full gap-[32px]">
          <div className="border-b pb-1 border-[#9A9A9A]">
            <input
              type="email"
              onChange={(e) => onChangeInput(e, setEmail)}
              value={email}
              placeholder="Enter email"
              className="border-none appearance-none outline-none flex-1 w-full"
            />
          </div>
          <div className="border-b pb-1 border-[#9A9A9A]">
            <input
              type="password"
              onChange={(e) => onChangeInput(e, setPassword)}
              value={password}
              placeholder="Enter password"
              className="border-none appearance-none outline-none flex-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[22px] mt-[60px]">
          <button
            type="submit"
            className="h-9 bg-blue rounded text-white tracking-[1px] text-[14px]"
          >
            LOGIN
          </button>
          <Link to="/sign-up" className="contents">
            <button
              type="button"
              className="h-9 bg-[#004366] rounded text-white tracking-[1px] text-[14px]"
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
