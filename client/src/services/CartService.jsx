import axios from "axios";

const token = localStorage.getItem("token");
const headers = {
  // "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export async function fetchUserCartDetails() {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL}cart/getcart`, {
    headers: headers,
  });
  return res.data;
}

export async function incrementCartItem(data) {
  const res = await axios.post(
    `${process.env.REACT_APP_BASE_URL}cart/addtocart`,
    data,
    {
      headers: headers,
    }
  );
  return res.data;
}
export async function decrementCartItem(data) {
  const res = await axios.post(
    `${process.env.REACT_APP_BASE_URL}cart/reducequantitytocart`,
    data,
    {
      headers: headers,
    }
  );
  return res.data;
}
export async function removeCartItem(data) {
  const res = await axios.post(
    `${process.env.REACT_APP_BASE_URL}cart/removefromcart`,
    data,
    {
      headers: headers,
    }
  );
  return res.data;
}
export async function handleCartPlaceOrder(address) {
  const res = await axios.post(
    `${process.env.REACT_APP_BASE_URL}order/postorder`,
    { orderLocation: address },
    {
      headers: headers,
    }
  );

  return res.data;
}
