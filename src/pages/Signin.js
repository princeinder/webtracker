import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";
import { Alert } from "react-bootstrap";
import { environment } from "../environment/environment";

const Signin = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState([]);
    const history = useHistory();
    const { userData, setUserData } = useContext(UserContext);
    useEffect(() => {
        if (userData.user) history.push("/");
    }, [history, userData]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        var req = { email, password };
        axios
            .post(`${environment}/api/login`, req)
            .then((res) => {
                localStorage.setItem("auth-token", res.data.success.token);
                setUserData({
                    token: res.data.success.token,
                    user: res.data.user,
                });
                history.push("/dashboard");
            })
            .catch((err) => {
                setError(err.response.data);
            });
    };
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="logo">
                    <a href="/">
                        <img src="img/logo-01.png" alt="logo" />
                    </a>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img
                                    src="img/image.png"
                                    className="image"
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <form className="signin" onSubmit={onSubmitForm}>
                                <div className="row mb-4 px-3">
                                    <h6 className="mb-0 mr-4 mt-2">
                                        Sign in with
                                    </h6>
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
                                    <div className="line" />
                                    <small className="or text-center">Or</small>
                                    <div className="line" />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            Email Address
                                        </h6>
                                    </label>
                                    <input
                                        className="mb-4"
                                        type="text"
                                        name="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter a valid email address"
                                    />
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            Password
                                        </h6>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input
                                            id="chk1"
                                            type="checkbox"
                                            name="chk"
                                            className="custom-control-input"
                                        />
                                        <label
                                            htmlFor="chk1"
                                            className="custom-control-label text-sm"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="/signin"
                                        className="ml-auto mb-0 text-sm"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="row mb-3 px-3">
                                    {error.message && (
                                        <Alert
                                            className="mt-2"
                                            variant="danger"
                                        >
                                            {error.message}
                                        </Alert>
                                    )}
                                </div>
                                <div className="row mb-3 px-3">
                                    <button
                                        type="submit"
                                        className="btn btn-blue text-center"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">
                                        Don't have an account?
                                        <a
                                            href="/signup"
                                            className="text-danger"
                                        >
                                            Register
                                        </a>
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
