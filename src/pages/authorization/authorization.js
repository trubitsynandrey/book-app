import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export const Authorization = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("sign-up")
  }, [])
  return (
    <>
    <Outlet />
    </>
  );
};
