// infrastructure
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import { saveToLocalStorage } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

// components
import toast, { Toaster } from "react-hot-toast";
import Input from "../../components/Forms/Input/Input";
import SubmitButton from "../../components/Forms/SubmitButton/SubmitButton";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // context hooks
  const [auth, setAuth] = useContext(AuthContext);

  // state hooks
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  // navigation hooks
  const navigate = useNavigate();

  // configs
  const registerFormFieldsConfig = [
    {
      title: "Email Address",
      type: "email",
      placeholder: "Enter email address",
      value: emailAddress,
      setValue: setEmailAddress,
    },
    {
      title: "Password",
      type: "password",
      placeholder: "Enter password",
      value: password,
      setValue: setPassword,
    },
  ];

  const validateForm = () => {
    const validEmail =
      emailAddress && 6 < emailAddress.length && emailAddress.length < 50;
    const validPassword =
      password && 8 < password.length && password.length < 20;
    return validEmail && validPassword;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // send form
      const { data } = await axios.post(`/signin`, {
        email: emailAddress,
        password: password,
      });
      // read server response
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success("You are now logged in! Enjoy!");
        setAuth(data);
        saveToLocalStorage("auth", data);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-50px" }}
    >
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 authbox">
            <h1 className="fw-bold mb-3">Log In</h1>
            <form>
              {registerFormFieldsConfig.map((props) => (
                <Input {...props} />
              ))}
              <SubmitButton
                submitValidator={validateForm}
                formSubmitHandler={handleFormSubmit}
              />
            </form>
            <p className="mt-3">
              Forgot password? <Link to="/forgot-password">Reset Password</Link>
            </p>
            <p className="mt-3">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
