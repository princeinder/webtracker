import React from "react";

const Sidebar = ({ userData }) => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <a href="/dashboard" className="nav-link">
                        <div className="profile-image">
                            <img
                                className="img-xs rounded-circle"
                                src="images/faces/face8.jpg"
                                alt="profile imag"
                            />
                            <div className="dot-indicator bg-success" />
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">
                                {userData.user && userData.user.name}
                            </p>
                            <p className="designation">Administrator</p>
                        </div>
                        <div className="icon-container">
                            <i className="icon-bubbles" />
                            <div className="dot-indicator bg-danger" />
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        <span className="menu-title">Dashboard</span>
                        <i className="icon-screen-desktop menu-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-toggle="collapse"
                        href="#ui-basic"
                        aria-expanded="false"
                        aria-controls="ui-basic"
                    >
                        <span className="menu-title">Events Feed</span>
                        <i className="icon-layers menu-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/add-url">
                        <span className="menu-title">Add URL</span>
                        <i className="icon-globe menu-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        <span className="menu-title">Monitored</span>
                        <i className="icon-book-open menu-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        <span className="menu-title">URLs</span>
                        <i className="icon-chart menu-icon" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                        <span className="menu-title">Setings</span>
                        <i className="icon-grid menu-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
