import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  // let location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const handleLoginform = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.pass.value;

    signInWithEmailAndPassword(email, password);
  };
  if (loading || gloading) {
    return <Loading></Loading>;
  }

  let signInError;
  if (error || gerror) {
    signInError = (
      <p className="text-red-600">
        <small>{error?.message}</small>
      </p>
    );
  }

  // let from = location.state?.from?.pathname || "/";
  if (user || guser) {
    navigate("/");
  }
  return (
    <div className="bg-slate-300">
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form onClick={handleLoginform} className="card-body ">
            <h2 className="card-title mx-auto">Login</h2>
            <h2 className="card-title ">Email</h2>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />

            <h2 className="card-title">Password</h2>

            <input
              name="pass"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />

            <Link to="/login">forget password?</Link>
            {signInError}
            <div className="card-actions justify-center ">
              <button className="btn btn-active w-full bg-slate-800 text-white">
                Login
              </button>
            </div>

            <p>
              New to Doctors portal?{" "}
              <span className="text-lime-500">
                {" "}
                <Link to="/signup">Create new account</Link>
              </span>
            </p>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
          </form>
          <div className="card-actions justify-center ">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-success w-80 mb-10  text-black"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
