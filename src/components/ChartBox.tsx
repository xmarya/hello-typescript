import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartFullData } from "../data/charts"
import { Link } from "react-router-dom"



type AcceptedTypes = "users" | "products" | "revenue" | "ratio";
type Props<Key extends AcceptedTypes> = {
    data:ChartFullData<Key>
}

export default function ChartBox<Key extends AcceptedTypes>({data}:Props<Key>) {
    return (
        <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={data.icon} alt="" />
          <span>{data.title}</span>
        </div>
        <h1>{data.number}</h1>
        <Link to="/" style={{ color: data.colour }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data.data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={data.datakey}
                stroke={data.colour}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: data.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {data.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
    )
}

