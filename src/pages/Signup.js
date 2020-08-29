import React from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { environment } from "../environment/environment";

const Signup = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [c_password, setConfirmPassword] = React.useState("");
    const [error, setError] = React.useState([]);
    const [success, setSuccess] = React.useState({});

    const onSubmitForm = (e) => {
        e.preventDefault();
        var req = { name, email, password, c_password };
        axios
            .post(`${environment}/api/register`, req)
            .then((res) => {
                setSuccess({ message: "User registered successfully..." });
                setError([]);
            })
            .catch((err) => {
                setError(err.response.data.message);
                setSuccess({});
            });
    };
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="logo">
                    <a href="/">
                        <img src="img/logo-01.png" alt="logo1" />
                    </a>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img
                                    src="img/image-01.png"
                                    className="image"
                                    alt="logo1"
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
                                            Full Name
                                        </h6>
                                    </label>
                                    <input
                                        className="mb-4"
                                        type="text"
                                        name="name"
                                        placeholder="Enter Full Name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                    />
                                    {error.name && (
                                        <Alert
                                            className="mt-2"
                                            variant="danger"
                                        >
                                            {error.name}
                                        </Alert>
                                    )}
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
                                        required
                                    />
                                    {error.email && (
                                        <Alert
                                            className="mt-2"
                                            variant="danger"
                                        >
                                            {error.email}
                                        </Alert>
                                    )}
                                </div>
                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            Password
                                        </h6>
                                    </label>
                                    <input
                                        className="mb-4"
                                        type="password"
                                        name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter password"
                                        required
                                    />
                                    {error.password && (
                                        <Alert
                                            className="mt-2"
                                            variant="danger"
                                        >
                                            {error.password}
                                        </Alert>
                                    )}
                                </div>

                                <div className="row px-3">
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">
                                            {" "}
                                            Confirm Password
                                        </h6>
                                    </label>
                                    <input
                                        className="mb-4"
                                        type="password"
                                        name="cpassword"
                                        placeholder="Confirm password"
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        required
                                    />
                                    {error.c_password && (
                                        <Alert
                                            className="mt-2"
                                            variant="danger"
                                        >
                                            {error.c_password}
                                        </Alert>
                                    )}
                                </div>
                                <div className="row mb-3 px-3">
                                    <button
                                        type="submit"
                                        className="btn btn-blue text-center"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="row mb-3 px-3">
                                    {success.message && (
                                        <Alert
                                            className="mt-2"
                                            variant="success"
                                        >
                                            {success.message}
                                        </Alert>
                                    )}
                                </div>
                                <div className="row mb-4 px-3">
                                    <small className="font-weight-bold">
                                        Have an account !
                                        <a
                                            href="/signin"
                                            className="text-danger"
                                        >
                                            Login
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

export default Signup;
