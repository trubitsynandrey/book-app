import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../components";

export const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)

  const setTrueOnTime = (setName, ms = 1500) => {
    setName(true)
    setTimeout(() => {
        setName(false)
    }, ms)
  }

  const navigate = useNavigate();
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    console.log("submitted");
    setIsError(false);
    setIsSuccess(false)
    if (email && name && password && repassword) {
      if (password !== repassword) {
        setTrueOnTime(setIsError, 2000)
        setErrorMessage("The password confirmation does not match");
      } else {
        try {
          const result = await fetch(
            `https://internsapi.public.osora.ru/api/auth/signup?name=${name}&email=${email}&password=${password}&password_confirmation=${repassword}`,
            {
              method: "POST",
            }
          )
            .then((res) => res.json())
            .then((res) => {
              if (res?.status === true) {
                console.log(res, 'success')
                setTrueOnTime(setIsSuccess)
                setErrorMessage(res.data.message)
              } else {
                const firstErrorMessage =
                  res?.errors[Object.keys(res?.errors)[0]][0];
                setErrorMessage(firstErrorMessage);
                setTrueOnTime(setIsError, 2000)
              }
              console.log(res, "rres");
              return res.data;
            });
        } catch (e) {
          console.log(e, "errorMessage");
        }
      }
    } else {
      setErrorMessage("All fields are required");
      setTrueOnTime(setIsError, 2000)
    }
  };

  const onChangeInput = (e, changeInput) => {
    changeInput(e.target.value);
    setIsError(false);
  };

  return (
    <div className="relative px-[10%] h-[100vh] flex items-center">
      <div
        data-error={isError}
        data-success={isSuccess}
        className="text-white text-[12px] absolute top-[-40px] text-center w-[80%] left-1/2 transform -translate-x-1/2 bg-alert flex h-[36px] items-center pl-[12px] opacity-0 transition-all"
      >
        <div>
          <Alert />
        </div>
        <p className="ml-[10px]">{errorMessage}</p>
      </div>
      <form className="w-full" onSubmit={onSubmitHandle}>
        <p className="text-[32px] mb-[50px]">Registration</p>
        <div className="flex flex-col w-full gap-[32px]">
          <div className="border-b pb-1 border-[#9A9A9A]">
            <input
              type="text"
              onChange={(e) => onChangeInput(e, setName)}
              value={name}
              placeholder="Enter name"
              className="border-none appearance-none outline-none flex-1 w-full"
            />
          </div>
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
          <div className="border-b pb-1 border-[#9A9A9A]">
            <input
              onChange={(e) => onChangeInput(e, setRepassword)}
              type="password"
              value={repassword}
              placeholder="Repeat password"
              className="border-none appearance-none outline-none flex-1 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[22px] mt-[60px]">
          <button
            type="submit"
            className="h-9 bg-blue rounded text-white tracking-[1px] text-[14px]"
          >
            SUBMIT
          </button>
          <Link to="/sign-in" className="contents">
            <button
              type="button"
              className="h-9 bg-[#004366] rounded text-white tracking-[1px] text-[14px]"
            >
              LOGIN
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
