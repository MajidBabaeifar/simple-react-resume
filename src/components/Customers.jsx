import React, { useState, useEffect } from "react";
import axios from "axios";

const Customers = () => {
  // making a state with reacthooks
  // const [state, setState] = useState(initialize value)
  const [customerList, setCustomerList] = useState([]);
  // const [num, setNum] = useState(0);

  const getData = async () => {
    const List = await axios.get("https://reqres.in/api/users?page=2");
    setCustomerList(List.data.data);
    console.log(customerList);
  };

  useEffect(() => {
    getData();
  }, []);

  // const inc = () => {
  //   setNum((prevNum) => prevNum+1)
  // }

  // useEffect(() => {
  //   const get = async () => {
  //     axios
  //       .get("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
  //       .then((response) => {
  //         // handle success
  //         setCustomerList(response.data.data);
  //       })
  //       .catch((error) => {
  //         // handle error
  //         console.log(error);
  //       })
  //       .then(function () {
  //         // always executed
  //       });
  //   };
  //   get();
  // }, []);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex d-column"
      id="customers"
    >
      <div className="my-auto">
        <div className="row ">
          {customerList.map((user) => (
            <div key={user.id}>
              <div>{user.first_name}</div>
              <div>{user.last_name}</div>
              <div>{user.email}</div>
              <img src={user.avatar} />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
