import { Bar,BarChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartBriefData } from "../data/charts"


type AcceptedTypes = "visits" | "profit"

type Props<Key extends AcceptedTypes> = {
    data: ChartBriefData<Key>
}

export default function BarChartBox<Key extends AcceptedTypes>({data}:Props<Key>) {
    return (
        <div className="barChartBox">
      <h1>{data.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={data.data}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={data.datakey} fill={data.colour} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    )
}

