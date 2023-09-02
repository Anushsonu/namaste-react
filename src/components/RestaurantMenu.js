import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.896257078982773&lng=77.5804116949439&restaurantId=` +
        resId
    );
    const res = await data.json();
    setResInfo(res?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRatingString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("Items Card :::", itemCards);
  console.log("State data :::", resInfo);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu:</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
