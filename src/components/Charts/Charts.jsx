import React from "react";
import { Line } from "react-chartjs-2";
import Box from "@mui/material/Box";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Bitcoin",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y-axis-1",
    },
    {
      label: "Shiba Coin",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.5)",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const MultiAxisLine = () => (
  <Box mt={10}>
    <div className="header">
      <h3 className="title" style={{ textAlign: "center", color: "red" }}>
        Today's Cryptocurrency{" "}
      </h3>
    </div>
    <Line data={data} options={options} />
  </Box>
);

export default MultiAxisLine;
