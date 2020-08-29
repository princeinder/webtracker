import React, { useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import { useHistory } from "react-router-dom";
import "../../styles/dash-style.css";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import Footer from "../../layout/Dashboard/Footer";
import Index from "../../components/dashboard/Index";
const Dashboard = () => {
    const { userData, setUserData } = useContext(UserContext);
    const token = localStorage.getItem("auth-token");
    const history = useHistory();
    useEffect(() => {
        if (!token) history.push("/");
    });
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
    };

    return (
        <div className="container-scroller">
            <Header userData={userData} logout={logout} />
            <div className="container-fluid page-body-wrapper">
                <Sidebar userData={userData} />
                <div className="main-panel">
                    <Index />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
