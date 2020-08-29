import React, { useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import { useHistory } from "react-router-dom";
import "../../styles/dash-style.css";
import ReactCrop from "react-image-crop";

import { environment } from "../../environment/environment";
import Header from "../../layout/Dashboard/Header";
import Sidebar from "../../layout/Dashboard/Sidebar";
import Footer from "../../layout/Dashboard/Footer";
import MonitorInput from "../../components/dashboard/MonitorInput";
const AddUrl = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [url, setUrl] = React.useState("");
    const [monitor, setMonitor] = React.useState("");
    const [screenshot, setScreenshot] = React.useState("");
    const [html, setHtml] = React.useState("");
    const [keywords, setKeywords] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const [crop, setCrop] = React.useState({ aspect: 4 / 3 });
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
    const onSubmitUrl = (event) => {
        event.preventDefault();
        setLoading(true);
        if (monitor === "visual")
            axios
                .get(
                    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&screenshot=true`
                )
                .then((res) => {
                    setHtml("");
                    setScreenshot(
                        res.data.lighthouseResult.audits["final-screenshot"]
                            .details.data
                    );
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        if (monitor === "html")
            axios
                .post(`${environment}/api/gethtml`, { url })
                .then((res) => {
                    setScreenshot("");
                    setHtml(res.data.html);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        if (monitor === "keyword")
            axios
                .post(`${environment}/api/getkeywords`, { url })
                .then((res) => {
                    setScreenshot("");
                    setHtml("");
                    setKeywords(res.data.keywords);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
    };
    return (
        <div className="container-scroller">
            <Header userData={userData} logout={logout} />
            <div className="container-fluid page-body-wrapper">
                <Sidebar userData={userData} />
                <div className="main-panel">
                    <div class="content-wrapper">
                        <MonitorInput
                            setUrl={setUrl}
                            setMonitor={setMonitor}
                            onSubmitUrl={onSubmitUrl}
                        />
                        <div
                            className="screenshot-view"
                            style={{ textAlign: "center" }}
                        >
                            {loading ? (
                                "loading"
                            ) : (
                                <>
                                    <p>{html}</p>

                                    {keywords.map((keyword, index) => (
                                        <p>{keyword}</p>
                                    ))}

                                    <ReactCrop
                                        src={screenshot}
                                        crop={crop}
                                        onChange={(newCrop) => setCrop(newCrop)}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AddUrl;
