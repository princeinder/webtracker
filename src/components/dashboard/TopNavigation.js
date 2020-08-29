import React from "react";

const TopNavigation = ({ userData, logout }) => {
    return (
        <>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex align-items-center">
                    <a className="navbar-brand brand-logo" href="/">
                        <div className="logo">
                            <img src="images/logo.png" alt="images/logo.png" />
                        </div>
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
                    <ul className="navbar-nav navbar-nav-right ml-auto">
                        <form
                            className="search-form d-none d-md-block"
                            action="!#"
                        >
                            <i className="icon-magnifier" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                        </form>
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="icon-basket-loaded" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="icon-chart" />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link count-indicator message-dropdown"
                                id="messageDropdown"
                                href="/dashboard"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="icon-speech" />
                                <span className="count">7</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown language-dropdown d-none d-sm-flex align-items-center">
                            <a
                                className="nav-link d-flex align-items-center dropdown-toggle"
                                id="LanguageDropdown"
                                href="!#"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div className="d-inline-flex mr-3">
                                    <i className="flag-icon flag-icon-us" />
                                </div>
                                <span className="profile-text font-weight-normal">
                                    English
                                </span>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-left navbar-dropdown py-2"
                                aria-labelledby="LanguageDropdown"
                            >
                                <a className="dropdown-item" href="!#">
                                    <i className="flag-icon flag-icon-us" />
                                    English
                                </a>
                                <a className="dropdown-item" href="!#">
                                    <i className="flag-icon flag-icon-fr" />{" "}
                                    French{" "}
                                </a>
                                <a className="dropdown-item" href="!#">
                                    <i className="flag-icon flag-icon-ae" />{" "}
                                    Arabic{" "}
                                </a>
                                <a className="dropdown-item" href="!#">
                                    <i className="flag-icon flag-icon-ru" />{" "}
                                    Russian{" "}
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="UserDropdown"
                                href="/dashboard"
                                data-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    className="img-xs rounded-circle ml-2"
                                    src="images/faces/face8.jpg"
                                    alt="Profile img"
                                />
                                <span className="font-weight-normal">
                                    {userData.user && userData.user.name}
                                </span>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right navbar-dropdown"
                                aria-labelledby="UserDropdown"
                            >
                                <div className="dropdown-header text-center">
                                    <img
                                        className="img-md rounded-circle"
                                        src="images/faces/face8.jpg"
                                        alt="Profile img"
                                    />
                                    <p className="mb-1 mt-3">
                                        {userData.user && userData.user.name}
                                    </p>
                                    <p className="font-weight-light text-muted mb-0">
                                        {userData.user && userData.user.email}
                                    </p>
                                </div>
                                <a className="dropdown-item" href="/dashboard">
                                    <i className="dropdown-item-icon icon-user text-primary" />{" "}
                                    My Profile{" "}
                                    <span className="badge badge-pill badge-danger">
                                        1
                                    </span>
                                </a>
                                <a className="dropdown-item" href="/dashboard">
                                    <i className="dropdown-item-icon icon-speech text-primary" />{" "}
                                    Messages
                                </a>
                                <a className="dropdown-item" href="/dashboard">
                                    <i className="dropdown-item-icon icon-energy text-primary" />{" "}
                                    Activity
                                </a>
                                <a className="dropdown-item" href="/dashboard">
                                    <i className="dropdown-item-icon icon-question text-primary" />{" "}
                                    FAQ
                                </a>
                                <button
                                    className="dropdown-item"
                                    onClick={logout}
                                >
                                    <i className="dropdown-item-icon icon-power text-primary" />
                                    Sign Out
                                </button>
                            </div>
                        </li>
                    </ul>
                    <button
                        className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                        type="button"
                        data-toggle="offcanvas"
                    >
                        <span className="icon-menu" />
                    </button>
                </div>
            </nav>
            {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Web Tracker</Navbar.Brand>
                <Nav className="mr-auto"></Nav>

                <Form inline>
                    {userData.user ? (
                        <>
                            <Navbar.Collapse className="justify-content-end mr-2">
                                <Navbar.Text>
                                    Signed in as:{" "}
                                    <a href="/">{userData.user.name}</a>
                                </Navbar.Text>
                            </Navbar.Collapse>
                            <Button
                                variant="info"
                                className="mr-2"
                                onClick={dashboard}
                            >
                                Dashboard
                            </Button>
                            <Button
                                variant="info"
                                className="mr-2"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link to="/signin">
                                <Button variant="info" className="mr-2">
                                    Signin
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button variant="info">Signup</Button>
                            </Link>
                        </>
                    )}
                </Form>
            </Navbar>
            <br /> */}
        </>
    );
};

export default TopNavigation;
