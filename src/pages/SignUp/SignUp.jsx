import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
  };

  // react hook form

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                className="input"
                placeholder="Name"
              />
              {errors.name && <span className=" text-red-500">Name is required*</span>}
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                className="input"
                placeholder="Email"
              />
              {errors.name && <span className=" text-red-500">Email is required*</span>}
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                {...register("password", { 
                    required: "Password is required", 
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long"
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must not exceed 20 characters"
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                      message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                    }
                  })}
                  
                name="password"
                className="input"
                placeholder="Password"
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              <input className="btn btn-neutral mt-4" type="submit" value="Sign Up" />
              
            </fieldset>
          </form>
          <p className="mb-12 flex justify-center items-center text-center"><small>Alrady Have an Account? <Link to={'/login'} className="text-violet-500">Please login</Link> </small> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
