import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
const Index = () => {
  var options = {
    cutoutPercentage: 75,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  const data = {
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ["#ffca00", "#38ce3c", "#ff4d6b"],
        borderColor: ["#ffca00", "#38ce3c", "#ff4d6b"],
      },
    ],
    labels: ["Reassigned", "Not Assigned", "Assigned"],
  };
  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "may",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      [30, 25, 50, 25, 50, 25, 50, 55, 20, 35, 25, 30],
      [25, 50, 10, 35, 30, 15, 20, 20, 30, 25, 10, 15],
      [45, 25, 40, 40, 20, 60, 30, 25, 50, 40, 65, 55],
    ],
  };
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Sessions by channel</h4>
              <div className="aligner-wrapper">
                <Doughnut data={data} options={options} />
                <div className="wrapper d-flex flex-column justify-content-center absolute absolute-center">
                  <h2 className="text-center mb-0 font-weight-bold">8.234</h2>
                  <small className="d-block text-center text-muted  font-weight-semibold mb-0">
                    Total Leads
                  </small>
                </div>
              </div>
              <div className="wrapper mt-4 d-flex flex-wrap align-items-cente">
                <div className="d-flex">
                  <span className="square-indicator bg-danger ml-2" />
                  <p className="mb-0 ml-2">Assigned</p>
                </div>
                <div className="d-flex">
                  <span className="square-indicator bg-success ml-2" />
                  <p className="mb-0 ml-2">Not Assigned</p>
                </div>
                <div className="d-flex">
                  <span className="square-indicator bg-warning ml-2" />
                  <p className="mb-0 ml-2">Reassigned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body performane-indicator-card">
              <div className="d-sm-flex">
                <h4 className="card-title flex-shrink-1">
                  Performance Indicator
                </h4>
                <p className="m-sm-0 ml-sm-auto flex-shrink-0">
                  <span className="data-time-range ml-0">7d</span>
                  <span className="data-time-range active">2w</span>
                  <span className="data-time-range">1m</span>
                  <span className="data-time-range">3m</span>
                  <span className="data-time-range">6m</span>
                </p>
              </div>
              <div className="d-sm-flex flex-wrap">
                <div className="d-flex align-items-center">
                  <span className="dot-indicator bg-primary ml-2" />
                  <p className="mb-0 ml-2 text-muted font-weight-semibold">
                    Complaints (2098)
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="dot-indicator bg-info ml-2" />
                  <p className="mb-0 ml-2 text-muted font-weight-semibold">
                    Task Done (1123)
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="dot-indicator bg-danger ml-2" />
                  <p className="mb-0 ml-2 text-muted font-weight-semibold">
                    Attends (876)
                  </p>
                </div>
              </div>
              <Bar data={data1} />
              <div id="performance-indicator-chart" className="ct-chart mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
