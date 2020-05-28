import React, { useState, useEffect } from "react";
import axiosWithAuth from "../axiosWithAxios/axiosWithAxios";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import "./form.css";

const initialFormL = {
  username: "",
  password: "",
};

const initialWarningL = {
  username: "Username is a required field",
  password: "Password is a required field",
};

const SchemaFormL = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is a required field"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is a required field"),
});

const Login = (props) => {
  const history = useHistory();
  const [loginU, setloginU] = useState(initialFormL);

  const [errorsL, seterrorsL] = useState(initialWarningL);

  const [buttonE, setbuttonE] = useState(false);

  useEffect(() => {
    SchemaFormL.isValid(loginU).then((valid) => {
      setbuttonE(valid);
    });
  }, [loginU]);

  const onChange = (e) => {
    e.persist();

    setloginU({ ...loginU, [e.target.name]: e.target.value });

    yup
      .reach(SchemaFormL, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        seterrorsL({ ...errorsL, [e.target.name]: "" });
      })
      .catch((err) => {
        seterrorsL({ ...errorsL, [e.target.name]: err.errors[0] });
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://african-marketplace-rd.herokuapp.com/api/auth/login",
        loginU
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/protected");
      })
      .catch((err) => console.log(err));
    setloginU({
      username: "",
      password: "",
    });
  };

  return (
    <div className="containerbig">
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form">
          <label>Username:&nbsp;</label>
          <input
            placeholder="Write username here"
            onChange={onChange}
            type="text"
            name="username"
            value={loginU.username}
          />

          <label>Password:&nbsp;</label>
          <input
            placeholder="Write password here"
            onChange={onChange}
            type="password"
            name="password"
            value={loginU.password}
          />

          <button className="Button" disabled={!buttonE} type="submit">
            {" "}
            Login
          </button>
          <div> {errorsL.username} </div>
          <div> {errorsL.password} </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
