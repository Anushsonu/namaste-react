import { useEffect, useState } from "react";

const useMenuRestaurant = (resId) => {
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
    // console.log("Res data ::::", res);
    setResInfo(res?.data);
    // console.log("From hook :::", resInfo);
  };
  return resInfo;
};

export default useMenuRestaurant;
