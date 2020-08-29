import React, { useContext } from "react";
import TopNavigation from "../../components/home/TopNavigation";
import UserContext from "../../context/userContext";
const Header = () => {
    const { userData, setUserData } = useContext(UserContext);
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
    };
    return (
        <header className="header-section clearfix">
            <div className="container-fluid">
                <a href="/" className="site-logo pull-left">
                    <div className="logo-top logo">
                        <img src="img/logo-01.png" alt="img/logo-01.png" />
                    </div>
                </a>
                {/* <div className="responsive-bar">
                    <i className="fa fa-bars" />
                </div> */}
                <TopNavigation userData={userData} logout={logout} />
            </div>
        </header>
    );
};

export default Header;
