import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  console.log(data);
  const [foods, setFoods] = useState(data);

// add function to filter out objects
// filter type/burgers,pizza,chicken,salad

  const filterType=(category)=>{
    setFoods(
      data.filter((items)=>{
        return items.category===category
      })
    )
  }

  //filter by price
  const filterPrice=(price)=>{
    setFoods(
      data.filter((items)=>{
        return items.price===price
      })
    )
  }




  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center  ">
        Top Rated Menu Items
      </h1>

      {/* filter row */}

      {/* lg: 1020px */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*  filter type*/}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              All
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              Burgers
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              Pizza
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              Salad
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              $
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              $$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              $$$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display images to map through data */}

      {/* grid layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg hover:scale-105 duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-600 rounded-full text-white p-1 ">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
