import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useIsOnline();
  // console.log("Res :::", filteredRes);
  if (onlineStatus === false) return <h1>Chech internet !!!</h1>;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9029804&lng=77.6241936&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (res.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex my-5 ml-5">
        <input
          className="border p-2 mr-5"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="border px-5 py-3 rounded-md bg-blue-400 mr-5"
          onClick={() => {
            if (searchText === "") {
              setFilteredRes(res);
            } else {
              const filtered = res.filter((val) =>
                val?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filtered);
            }
          }}
        >
          Search
        </button>
        <button
          className="border px-5 py-3 bg-pink-400 rounded-md transform transition-transform hover:scale-95"
          onClick={() => {
            const filtered = res.filter((val) => val?.info?.avgRating > 4);
            setFilteredRes(filtered);
          }}
        >
          Filter Top rated
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant, index) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard key={index} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
