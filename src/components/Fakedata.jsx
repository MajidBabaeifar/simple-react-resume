import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import Cart from './Cart';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Badge } from '@mui/material'

const Fakedata = () => {
  // const [productList, setProductList] = useState([...Array(100)]);

  useEffect(() => {

  }, [])
  const getdata = [...Array(100)].map((item) => ({
    image: faker.image.nature(300, 300, true),
    name: faker.commerce.product(),
    desription: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    isAvailable: faker.datatype.boolean(),
  }));

  return (

    <div className="--container">
      <div className="--shopping-cart">
        <AiOutlineShoppingCart />
        <Badge>5</Badge>
      </div>
      {getdata.map((item) => (
        <Cart item={item} />
      ))}
    </div>
  );
};
export default Fakedata;
