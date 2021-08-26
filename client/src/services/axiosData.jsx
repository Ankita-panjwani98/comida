import axios from "axios";

export const request = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-restuarants');
     
      return response.data
    }
    catch (e) {
    }
}
  
export const getRestaurantById = async (id) => {
  const res = await axios(
    "http://localhost:5000/restaurant/getrestaurantbyid/" + id)
  return res.data;
 /*  setRestaurant(res.data);
  setItems(res.data.menuDetails); */
}