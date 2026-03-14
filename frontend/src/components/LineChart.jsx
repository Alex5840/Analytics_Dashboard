import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function LineChart({ trend }) {

  if (!trend || trend.length === 0) {
    return (
      <div className="text-gray-400">
        Click a bar to view trend
      </div>
    )
  }

  const chartData = {
    labels: trend.map(item =>
  new Date(item.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short"
  })
),
    datasets: [
  {
    label: "Clicks",
    data: trend.map(item => item.clicks),
    borderColor: "#10b981",
    backgroundColor: "rgba(16,185,129,0.2)",
    tension: 0.4,
    fill: true,
    pointRadius: 4
  }
]
  }

  return <Line data={chartData} redraw />
}