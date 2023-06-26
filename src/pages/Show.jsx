import React from "react";
import showStore from "../stores/showStore";
import homeStore from "../stores/homeStore";
import { useParams, Link } from "react-router-dom";
import "./Show.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Home from "./Home";
import Header from "../components/Header";

const data = [];

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];

export default function Show() {
  const store1 = homeStore();

  React.useEffect(() => {
    store1.fetchCoins();
  }, []);

  const store = showStore();
  const params = useParams();

  React.useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (!store.data) return <></>;

  return (
    <div className="top_container">
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <div className="coin_list2">
              <input
                placeholder="Search Coin"
                type="text"
                value={store1.query}
                onChange={store1.setQuery}
                id="coin_search"
              />
              <div className="coin_con2">
                {store1.coins.map((coin) => {
                  return (
                    <div className="ind_coin2">
                      <div key={coin.id} className="coin">
                        <Link to={`/${coin.id}`}>{coin.name}</Link>
                        <img src={coin.image} className="logo_img" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col className="Sec_col">
            <header className="head_coin2">
              <h2 className="cn_name">
                {store.data.name} ({store.data.symbol}){" "}
              </h2>
              <br></br>
              <img src={store.data.image.large} />
            </header>
            <AreaChart
              className="chart"
              width={700}
              height={500}
              data={store.graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </Col>
          <Col>
            <div className="content2">
              <div>
                <h3 id="he_con">Current Analysis</h3>
                <h4> 24h high</h4>
                <span>${store.data.market_data.high_24h.usd}</span>
              </div>
              <div>
                <h4>24h low</h4>
                <span>${store.data.market_data.low_24h.usd}</span>
              </div>
              <div>
                <h4>Circulating supply</h4>
                <span>${store.data.market_data.circulating_supply}</span>
              </div>
              <div>
                <h4>Current Price</h4>
                <span>${store.data.market_data.current_price.usd}</span>
              </div>
              <div>
                <h4>1y change</h4>
                <span>
                  $
                  {store.data.market_data.price_change_percentage_1y.toFixed(2)}
                  %
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
