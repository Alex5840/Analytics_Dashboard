import BarChart from "./BarChart"
import LineChart from "./LineChart"

export default function ChartsSection({analytics,trend,onBarClick}){

  return(

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-sm border">

        <h3 className="text-lg font-semibold mb-4">
          Feature Usage
        </h3>

        <BarChart data={analytics} onBarClick={onBarClick}/>

      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">

        <h3 className="text-lg font-semibold mb-4">
          Time Trend
        </h3>

<LineChart
  trend={trend}
/>

      </div>

    </div>

  )
}