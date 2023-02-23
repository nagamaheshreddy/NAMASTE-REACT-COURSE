import { restaurantList } from "../Utils/constants";
import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import UseOnline from "../Utils/useOnline";

const Body = function () {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  let isOnline = UseOnline();

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4939846&lng=78.40226349999999&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantData = await response.json();
    setAllRestaurants(restaurantData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(restaurantData?.data?.cards[2]?.data?.data?.cards);
  }

  if (!isOnline) {
    return window.alert("You are OFFLINE");
  }

  if (filteredRestaurants.length === 0) {
    return <ShimmerUI />;
  } else {
    return (
      <>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="searchButton"
            onClick={() => {
              const data = filterData(searchTxt, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="container">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Body;
