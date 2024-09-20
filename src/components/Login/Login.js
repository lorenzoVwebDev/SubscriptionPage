import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const onButtonClick = () => {
// regex for email ^(?:[a-zA-Z0-9._%+-]+)@(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$

    setEmailError('');
    setPasswordError('');

  
    if (email === '') {
      setEmailError('Please enter a valid email');
      return
    } else if (!/^(?:[a-zA-Z0-9._%+-]+)@(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
      setEmailError('Please enter a valid email');
      return
    } else if (password.length < 8 || password.slice(1, 2) === ' ') {
      setPasswordError('Password must be 8 characters or longer');
      return
    };

    
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter here your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <br/>
        <label className="errorLabel">{/* {emailError} */}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter here your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <br/>
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'}/>
      </div>
    </div>
  ) 
};

export default Login;