import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin =  event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
    
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false); // Enable the login button
        } else {
            setDisable(true);  // Keep it disabled if validation fails
            alert("Invalid captcha! Try again."); // Optional feedback for the user
        }
    };
    

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <label className="fieldset-label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name='captcha' className="input" placeholder="Type Code" />
                <button onClick={handleValidateCaptcha} className="btn btn-outline btn-primary btn-xs">Validate</button>
                <div><a className="link link-hover">Forgot password?</a></div>
                <input disabled={disable} className="btn btn-neutral mt-4" type="submit" value="Login" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;