// infrastructure
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/auth';
import { saveToLocalStorage } from '../../helpers/auth';
import { useNavigate } from 'react-router-dom';

// components
import toast, { Toaster } from 'react-hot-toast';
import Input from '../../components/Forms/Input/Input';
import SubmitButton from '../../components/Forms/SubmitButton/SubmitButton';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  // context hooks
  const [auth, setAuth] = useContext(AuthContext);

  // state hooks
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [confirmedEmailAddress, setConfirmedEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  // navigation hooks
  const navigate = useNavigate();

  // configs
  const registerFormFieldsConfig = [
    {
      title: 'First Name',
      type: 'text',
      placeholder: 'Enter first name',
      value: firstName,
      setValue: setFirstName,
    },
    {
      title: 'Last Name',
      type: 'text',
      placeholder: 'Enter last name',
      value: lastName,
      setValue: setLastName,
    },
    {
      title: 'User Name (*)',
      type: 'text',
      placeholder: 'Enter user name',
      value: userName,
      setValue: setUserName,
    },
    {
      title: 'Email Address (*)',
      type: 'email',
      placeholder: 'Enter email address',
      value: emailAddress,
      setValue: setEmailAddress,
    },
    {
      title: 'Confirm Email Address (*)',
      type: 'email',
      placeholder: 'Re-enter email address',
      value: confirmedEmailAddress,
      setValue: setConfirmedEmailAddress,
    },
    {
      title: 'Password (*)',
      type: 'password',
      placeholder: 'Enter password',
      value: password,
      setValue: setPassword,
    },
    {
      title: 'Confirm Password (*)',
      type: 'password',
      placeholder: 'Re-enter password',
      value: confirmedPassword,
      setValue: setConfirmedPassword,
    },
  ];

  const validateForm = () => {
    const validUserName =
      userName && 8 < userName.length && userName.length < 20;
    const validEmail =
      emailAddress &&
      emailAddress === confirmedEmailAddress &&
      6 < emailAddress.length &&
      emailAddress.length < 50;
    const validPassword =
      password &&
      password === confirmedPassword &&
      8 < password.length &&
      password.length < 20;
    return validUserName && validEmail && validPassword;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      toast.success('Registration Form Submitted!');
      const { data } = await axios.post(`/signup`, {
        name: userName,
        email: emailAddress,
        password: password,
      });
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        setAuth(data);
        saveToLocalStorage('auth', data);
        toast.success('Registration Successful!');
        toast.success('Redirecting to dashboard page...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 5);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: '-50px' }}
    >
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="fw-bold mb-3">Register</h1>
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
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
