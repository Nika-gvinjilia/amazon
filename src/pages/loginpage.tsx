
import { useRef, useState, useEffect, useContext, FormEvent } from 'react';
import AuthContext from "../context/AuthProvidex";
import { NavLink } from 'react-router-dom';

// import axios, { AxiosResponse } from 'axios';
import axios, { AxiosResponse } from 'axios';

const LOGIN_URL = 'https://jsonplaceholder.typicode.com/posts';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response: AxiosResponse<any> = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response.data));
      const accessToken: string = response.data.accessToken;
      const roles: string[] = response.data.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err: any) {
      if (!err.response) {
        setErrMsg('No Server Response');
      } else if (err.response.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              {/* put router link here */}
              <a href="/Register">Sign Up</a>
            </span>
          </p>
          <NavLink to={"/"}>home</NavLink>
        </section>
      )}
    </>
  );
};

export default Login;
