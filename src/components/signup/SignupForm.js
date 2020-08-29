import React from "react";
import "../../styles/form-style.css";
const SignupForm = ({ setEmail, setPassword, onSubmitForm, error }) => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="logo">
          <img src="img/logo-01.png" />
        </div>
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img src="img/image.png" className="image" />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <div className="fa fa-facebook" />
                </div>
                <div className="twitter text-center mr-3">
                  <div className="fa fa-twitter" />
                </div>
                <div className="linkedin text-center mr-3">
                  <div className="fa fa-linkedin" />
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />{" "}
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  placeholder="Enter a valid email address"
                />{" "}
              </div>
              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />{" "}
              </div>
              <div className="row px-3 mb-4">
                <div className="custom-control custom-checkbox custom-control-inline">
                  {" "}
                  <input
                    id="chk1"
                    type="checkbox"
                    name="chk"
                    className="custom-control-input"
                  />{" "}
                  <label
                    htmlFor="chk1"
                    className="custom-control-label text-sm"
                  >
                    Remember me
                  </label>{" "}
                </div>{" "}
                <a href="#" className="ml-auto mb-0 text-sm">
                  Forgot Password?
                </a>
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button type="submit" className="btn btn-blue text-center">
                  Login
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?
                  <a href="Sign-In.html" className="text-danger">
                    Register
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <form onSubmit={onSubmitForm}>
    //   <div className="row">
    //     <div className="input-group form-group col-md-12">
    //       <input
    //         required
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         className="form-control"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="input-group form-group  col-md-12">
    //       <input
    //         required
    //         type="password"
    //         name="password1"
    //         placeholder="Password"
    //         className="form-control"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //   </div>
    //   {error.message && <span className="errors">{error.message}</span>}
    //   <div className="form-group">
    //     <input
    //       type="submit"
    //       name="btn"
    //       defaultValue="Login"
    //       className="btn btn-primary w-100 d-block text-uppercase login_btn"
    //     />
    //   </div>
    // </form>
  );
};

export default SignupForm;
