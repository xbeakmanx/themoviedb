// TMDBAuth.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetRequestTokenQuery,
  useCreateSessionWithLoginMutation,
  useCreateSessionMutation,
} from '../../api/apiSlice';
import { setSessionId } from '../../features/auth';

const Login = ({ setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: tokenData } = useGetRequestTokenQuery();
  const [createSessionWithLogin, { data: loginData, isSuccess: loginSuccess, isError }] =
    useCreateSessionWithLoginMutation();
  const [createSession, { data: sessionData, isSuccess: sessionSuccess, isLoading }] = useCreateSessionMutation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (tokenData?.request_token) {
      await createSessionWithLogin({ username, password, requestToken: tokenData.request_token });
    }
  };

  useEffect(() => {
    if (loginSuccess && loginData) {
      createSession(loginData.request_token);
    }
  }, [loginSuccess, loginData, createSession]);

  useEffect(() => {
    if (sessionSuccess && sessionData) {
      dispatch(setSessionId(sessionData.session_id)); // Almacena el session_id en Redux
      navigate('/'); // Redirigir a la página principal o a donde necesites
      setShowModal(false);
    }
  }, [sessionSuccess, sessionData, navigate, dispatch]);

  return (
    <div className="mt-8">
      <p className="text-center text-xl -mt-6 mb-5 dark:text-white text-black">Login with TMDb user</p>
      {isError && <p className="text-red-500 text-center mb-3">Wrong credentials</p>}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded mb-2 w-full text-black "
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mb-2 w-full text-black "
      />
      <br />
      <button
        onClick={handleLogin}
        className="p-2 bg-blue-500 text-white rounded w-full"
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
