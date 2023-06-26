import React from "react";
import homeStore from "../stores/homeStore";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <div className="center_search"></div>

      <div className="coin_con">
        <input
          type="text"
          placeholder="Search Coin"
          value={store.query}
          onChange={store.setQuery}
          id="coin_search"
        />
        {store.coins.map((coin) => {
          return (
            <div className="ind_coin">
              <div key={coin.id} className="coin">
                <Link to={`/${coin.id}`}>{coin.name}</Link>
                <img src={coin.image} className="logo_img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
