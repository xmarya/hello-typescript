import AreaChartBox from "../../components/AreaChartBox";
import BarChartBox from "../../components/BarChartBox";
import ChartBox from "../../components/ChartBox";
import PieChartBox from "../../components/PieChartBox";
import TopBox from "../../components/TopBox";
import { barChartBoxRevenue, barChartBoxVisits, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data/charts";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-page">
      <div className="top-deals"><TopBox/></div>

      <div className="visits">
        <BarChartBox<"visits"> data={barChartBoxVisits} />
      </div>

      <div className="totals">
        <ChartBox<"users"> data={chartBoxUser}/>
        <ChartBox<"products"> data={chartBoxProduct}/>
        <ChartBox<"revenue"> data={chartBoxRevenue}/>
        <ChartBox<"ratio"> data={chartBoxConversion}/>
      </div>

      <div className="analytics">
        <AreaChartBox/>
      </div>

      <div className="lead-by">
        <PieChartBox/>
      </div>

      <div className="profit">
        <BarChartBox<"profit"> data={barChartBoxRevenue}/>
      </div>
    </div>
  );
}
