import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Input from '../../components/Forms/Input/Input';

const RegisterPage = () => {
  console.log(process.env.REACT_APP_API);

  // hooks
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [confirmedEmailAddress, setConfirmedEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

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
    // TODO: perform advanced forms validation
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

  const resetForm = () => {
    setUserName('');
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setConfirmedEmailAddress('');
    setPassword('');
    setConfirmedPassword('');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // TODO: send registration data to the backend
      // TODO: redirect user to the dashboard page
      toast.success('Registration Form Submitted!');
      // resetForm();
      const requestData = {
        name: userName,
        email: emailAddress,
        password: password,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/signup`,
        requestData
      );
      if (data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success('Registration Successful!');
        console.log('registration success', data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: '-100px' }}
    >
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="fw-bold mb-3">Register</h1>
            <form>
              {/* Form Fields */}
              {registerFormFieldsConfig.map((props) => (
                <Input {...props} />
              ))}
              {/* Submit Button */}
              <button
                type="submit"
                class="btn btn-primary"
                disabled={!validateForm()}
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* <pre className="d-flex justify-content-center">
          data:{' '}
          {JSON.stringify(
            {
              firstName,
              lastName,
              userName,
              emailAddress,
              confirmedEmailAddress,
              password,
              confirmedPassword,
            },
            null,
            4
          )}
        </pre> */}
      </div>
    </div>
  );
};

export default RegisterPage;
