import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

const DisplayChart = ({chartdata}) => {
  return (
   <>
        <Doughnut data={chartdata} />
   </>
  )
}

export default DisplayChart
