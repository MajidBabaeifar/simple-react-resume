import { faker } from "@faker-js/faker";
import { useState } from "react";

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
    //   <div>hi</div>

    <div className="--container">
      {getdata.map((item) => (
        <div className="--card">
          <img src={item.image} />
          <span>{item.name}</span>
          <span>{item.desription}</span>
          <span>{item.price}</span>
          <span>{item.isAvailable ? "available" : "not available"}</span>
        </div>
      ))}
    </div>
  );
};
export default Fakedata;
