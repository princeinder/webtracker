import React from "react";

const MonitorInput = ({ setUrl, setMonitor, onSubmitUrl }) => {
    return (
        <form
            onSubmit={onSubmitUrl}
            style={{ width: "500px", margin: "0 auto" }}
        >
            <div className="row">
                <div className="input-group form-group col-md-12">
                    <input
                        required
                        type="text"
                        name="monitorUrl"
                        placeholder="Add Url"
                        className="form-control"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group">
                <select
                    type="submit"
                    name="monitor"
                    className="form-control"
                    onChange={(e) => setMonitor(e.target.value)}
                >
                    <option value="">Select Actions</option>
                    <option value="visual">Visual Monitoring</option>
                    <option value="html"> HTML Monitoring</option>
                    <option value="keyword"> Keywords Monitoring</option>
                </select>
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    name="btn"
                    defaultValue="Login"
                    className="btn btn-primary w-100 d-block text-uppercase login_btn"
                />
            </div>
        </form>
    );
};

export default MonitorInput;
