import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export const Authorization = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // проверка на кукис
    // запрос с токеном?
    
    navigate("sign-up")
  }, [])
  return (
    <>
    <Outlet />
    </>
  );
};
