import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const {SingInUser} = useContext(AuthContext);
  console.log(SingInUser);

  const handleSingIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SingInUser(email, password)
   .then(result => 
    {
      console.log(result.user);
    })
    .catch(error => {
       console.log(error);
     });
  }


    
  return (
    <div>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link to='/singUp'>
              <span className="link link-hover">
                Sign up
              </span>
              </Link>
            </p>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
