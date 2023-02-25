import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageCdnUrl } from "../Utils/constants";
import ShimmerUI from "./ShimmerUI";
import UseRestaurant from "../Utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantMenu = UseRestaurant(id);
  const dispatcher = useDispatch(addItem);

  const addToCartHandler = (item) => {
    dispatcher(addItem(item));
  };

  if (!restaurantMenu) {
    return <ShimmerUI />;
  }

  return (
    <div className="Menu">
      <div className="menu-container">
        {/* <h2>Restaurant id : {id}</h2> */}
        <img src={imageCdnUrl + restaurantMenu.cloudinaryImageId}></img>
        <h3>{restaurantMenu.name}</h3>
        <h4>Location: {restaurantMenu.area}</h4>
        <h4>Rating :{restaurantMenu.avgRating}</h4>
      </div>
      <div>
        {Object.values(restaurantMenu?.menu?.items).map((item) => {
          return (
            <div className="menu-item">
              <li key={item.id}>{item.name}</li>
              <button
                className="add-to-cart"
                onClick={() => addToCartHandler(item)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
