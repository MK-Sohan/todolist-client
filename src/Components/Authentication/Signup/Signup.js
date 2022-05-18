import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
const Signup = () => {
  // let location = useLocation();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  // evend lestener start==========================
  const handleRegisterform = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    // console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
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
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form onSubmit={handleRegisterform} className="card-body ">
            <h2 className="card-title mx-auto">Register</h2>
            <h2 className="card-title ">Name</h2>
            <input
              required
              name="name"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            <h2 className="card-title ">Email</h2>
            <input
              required
              name="email"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            <h2 className="card-title">Password</h2>
            <input
              required
              name="pass"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />

            {signInError}
            <Link to="/login">forget password?</Link>
            <div className="card-actions justify-center ">
              <button className="btn btn-active w-full bg-slate-800 text-white">
                Register
              </button>
            </div>
            <p>
              Already Have an Account?{" "}
              <span className="text-lime-500">
                {" "}
                <Link to="/login">Log in</Link>
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

export default Signup;
