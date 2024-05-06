/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [food, setFood] = useState([]);
  console.log(food, "food data");

  useEffect(() => {
    axios
      .get("http://localhost:3000/food")
      .then((response) => {
        setFood(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-gray-500 rounded-lg">
      <div className="flex justify-start mx-4 mt-1">
        <Link
          to="/"
          className="bg-green-600 rounded-md font-medium hover:bg-green-900 text-white py-2 px-4"
        >
          Add food +
        </Link>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg mt-4">
        <table className="w-full text-left">
          <thead className="uppercase bg-gray-200">
            <tr>
              <th scope="col" className="py-3 px-5">
                #
              </th>
              <th scope="col" className="py-3 px-5">
                Name
              </th>
              <th scope="col" className="py-3 px-5">
                Price in Cents
              </th>
              <th scope="col" className="py-3 px-5">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {food.map((item, index) => (
              <tr key={item._id} className="bg-white  hover:bg-gray-200">
                <td className="py-3 px-5">{index + 1}</td>
                <td className="py-3 px-5">{item.name}</td>
                <td className="py-3 px-5">{item.priceInCents}</td>
                <td className="py-3 px-5">
                  <div className="flex  gap-x-4  ">
                    <div className="flex  gap-x-1">
                      <Link
                        to="/"
                        className="bg-orange-500 rounded-md text-white font-medium hover:bg-orange-900 py-2 px-4"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/"
                        className="bg-red-500 rounded-md text-white font-medium hover:bg-red-900 py-2 px-4"
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
