import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import axios from "axios";
import { environment } from "./environment/environment";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserContext from "./context/userContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddUrl from "./pages/Dashboard/AddUrl";
import Loading from "./components/loading/Loading";

function Router() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        const checkLoggedIn = async () => {
            setLoading(true);
            let token = localStorage.getItem("auth-token");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
                setLoading(false);
            } else {
                const config = {
                    headers: { Authorization: `Bearer ${token}` },
                };
                axios
                    .post(`${environment}/api/details`, {}, config)
                    .then((res) => {
                        setUserData({
                            token,
                            user: res.data.success,
                        });
                        setLoading(false);
                    })
                    .catch((err) => {
                        setLoading(false);
                    });
            }
        };
        checkLoggedIn();
    }, []);
    if (loading) return <Loading />;
    else
        return (
            <Routes>
                <UserContext.Provider value={{ userData, setUserData }}>
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <Route path="/add-url" component={AddUrl} />
                            <Route path="/signin" component={Signin} />
                            <Route path="/signup" component={Signup} />
                        </Switch>
                    </div>
                </UserContext.Provider>
            </Routes>
        );
}

export default Router;
