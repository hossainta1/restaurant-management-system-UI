import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disable, setDisable] = useState(true);

  // use context
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // use context

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Log in Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false); // Enable the login button
    } else {
      setDisable(true); // Keep it disabled if validation fails
      alert("Invalid captcha! Try again."); // Optional feedback for the user
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <label className="fieldset-label">
                <LoadCanvasTemplate />
              </label>
              <input onBlur={handleValidateCaptcha}
                type="text"
                name="captcha"
                className="input"
                placeholder="Type Code"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input
                disabled={disable}
                className="btn btn-neutral mt-4"
                type="submit"
                value="Login"
              />
            </fieldset>
          </form>
           <p className="mb-12 flex justify-center items-center text-center">
            <small>New Here? <Link to={'/signup'} className="text-violet-500">Create a new account</Link> </small> 
            </p>

            <SocialLogin></SocialLogin>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
