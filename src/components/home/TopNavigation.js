import React from "react";

const TopNavigation = ({ userData, logout }) => {
    return (
        <>
            <nav className="main-menu">
                <ul className="menu-list">
                    <li>
                        <a href="/">Solution</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Roadmap</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>

            {userData.user ? (
                <>
                    <a href="/dashboard" className="site-btn">
                        Dashboard
                    </a>
                </>
            ) : (
                <a href="/signup" className="site-btn">
                    Sign Up Free
                </a>
            )}
        </>
    );
};

export default TopNavigation;
