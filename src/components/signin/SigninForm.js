import React from "react";
import "../../styles/form-style.css";
const SigninForm = ({ setEmail, setPassword, onSubmitForm, error }) => {
  return (
    <form onSubmit={onSubmitForm}>
      <div className="row">
        <div className="input-group form-group col-md-12">
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group form-group  col-md-12">
          <input
            required
            type="password"
            name="password1"
            placeholder="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {error.message && <span className="errors">{error.message}</span>}
      <div className="form-group">
        <input
          type="submit"
          name="btn"
          defaultValue="Login"
          className="btn btn-primary w-100 d-block text-uppercase login_btn"
        />
      </div>
    </form>
  );
};

export default SigninForm;
