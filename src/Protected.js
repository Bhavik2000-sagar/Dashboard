import React, { useEffect } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
// import Home1 from "./Home1";

const Protected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    // console.log(login);
    if (login === null) {
    //   console.log("worked");
      navigate("/login",{});
    }
  });

  return (
    <>
      <Home />
    </>
  );
};

export default Protected;
