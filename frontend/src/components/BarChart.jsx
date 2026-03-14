import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

// REGISTER REQUIRED ELEMENTS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function BarChart({ data,onBarClick }) {
    const options = {

  onClick:(event,elements)=>{

    if(elements.length > 0){

      const index = elements[0].index
      const feature = data[index].feature_name
     

      onBarClick(feature)

    }

  }

}

  if (!data || data.length === 0) {
    return <p>No data available</p>
  }

  const chartData = {
    labels: data.map(item => item.feature_name),
    datasets: [
      {
        label: "Feature Clicks",
        data: data.map(item => item.total_clicks),
        backgroundColor: "#6366f1"
      }
    ]
  }

  return <Bar data={chartData} options={options} redraw />
}