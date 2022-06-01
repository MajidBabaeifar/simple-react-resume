import { faker } from "@faker-js/faker";
import { useState } from "react";
import Cart from './Cart';

const Fakedata = () => {
  const [productList, setProductList] = useState([...Array(100)]);


  const getdata = productList.map((item) => ({
    image: faker.image.nature(300, 300, true),
    name: faker.commerce.product(),
    desription: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    isAvailable: faker.datatype.boolean(),
  }));

  return (

    <div className="--container">
      <div className="--shopping-cart"></div>
      {getdata.map((item) => (
        <Cart item={item} />
      ))}
    </div>
  );
};
export default Fakedata;
