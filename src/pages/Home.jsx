import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="lg:px-36 px-4">
      <h3 className="text-2xl font-bold text-center py-3 underline">
        Our latest coffee.
      </h3>
      <div className="lg:grid grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffee={coffee}
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
