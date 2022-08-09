// infrastructure
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import { saveToLocalStorage } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

// components
import toast from "react-hot-toast";
import Input from "../../components/Forms/Input/Input";
import SubmitButton from "../../components/Forms/SubmitButton/SubmitButton";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  // context hooks
  const [auth, setAuth] = useContext(AuthContext);

  // state hooks
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  // navigation hooks
  const navigate = useNavigate();

  // configs
  const registerFormFieldsConfig = [
    {
      title: "Email Address (*)",
      type: "email",
      placeholder: "Enter email address",
      value: emailAddress,
      setValue: setEmailAddress,
      alwaysVisible: true,
    },
    {
      title: "New Password (*)",
      type: "password",
      placeholder: "Enter new password",
      value: password,
      setValue: setPassword,
      alwaysVisible: false,
    },
    {
      title: "Confirm New Password (*)",
      type: "password",
      placeholder: "Re-enter new password",
      value: confirmedPassword,
      setValue: setConfirmedPassword,
      alwaysVisible: false,
    },
    {
      title: "Reset Password Code (Sent to Your Email) (*)",
      type: "text",
      placeholder: "Enter reset password code",
      value: resetCode,
      setValue: setResetCode,
      alwaysVisible: false,
    },
  ];

  const validateForm = () => {
    const validEmail =
      emailAddress && 6 < emailAddress.length && emailAddress.length < 50;
    const validPassword =
      password &&
      password === confirmedPassword &&
      8 < password.length &&
      password.length < 20;
    return (validEmail && !isValidEmail) || validPassword;
  };

  const handleEmailFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // send to server
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/forgot-password`,
        {
          email: emailAddress,
        }
      );
      // read response
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success(
          "Enter a new password and the reset password code sent to your email address."
        );
        setIsValidEmail(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleResetPasswordFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // send to server
      const { data } = await axios.post(`/reset-password`, {
        email: emailAddress,
        password: password,
        resetCode: resetCode,
      });
      // read response
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success("Password reset process succeeded! You are all set!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error(
        "Something went wrong with password reset process! Please try again."
      );
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 authbox">
            <h1 className="fw-bold mb-3">Reset Password</h1>
            <form>
              {registerFormFieldsConfig.map(
                (props) =>
                  (props.alwaysVisible || isValidEmail) && <Input {...props} />
              )}
              <SubmitButton
                submitValidator={validateForm}
                formSubmitHandler={
                  !isValidEmail
                    ? handleEmailFormSubmit
                    : handleResetPasswordFormSubmit
                }
              />
            </form>
            <p className="mt-3">
              Remembered password? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
