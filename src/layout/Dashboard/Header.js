import React from "react";
import TopNavigation from "../../components/dashboard/TopNavigation";

const Header = ({ userData, logout }) => {
    return <TopNavigation userData={userData} logout={logout} />;
};

export default Header;
