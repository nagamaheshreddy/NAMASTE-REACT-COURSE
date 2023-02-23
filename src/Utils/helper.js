export const filterData = (searchTxt, allRestaurants) => {
  let filteredData = allRestaurants.filter((restaurant) => {
    return restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase());
  });
  return filteredData;
};
