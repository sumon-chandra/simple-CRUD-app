import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { userLoader } from "./route-loaders/loaders";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";

const coffeeLoader = async () => {
  const res = await fetch("http://localhost:4000/coffee");
  return res.json();
};

const updateCoffeeLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/coffee/${id}`);
  return res.json();
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={coffeeLoader} />
        <Route path="addCoffee" element={<AddCoffee />} />
        <Route
          path="updateCoffee/:id"
          element={<UpdateCoffee />}
          loader={updateCoffeeLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
