import React from "react";
import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch("http://localhost:4000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="bg-slate-200 p-4 lg:w-1/2 w-full m-4 mx-auto">
      <div className="text-yellow-900 text-center">
        <h3 className=" py-2 text-2xl font-semibold">Add a Coffee</h3>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-4 lg:grid grid-cols-2 gap-x-8 mt-10 rounded-md shadow-lg"
      >
        <div className="form-control">
          <p className="label">Coffee Name</p>
          <input
            type="text"
            name="name"
            placeholder="Coffee Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <p className="label">Available Quantity</p>
          <input
            type="number"
            name="quantity"
            placeholder="Available Quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <p className="label">Supplier</p>
          <input
            type="text"
            name="supplier"
            placeholder="Coffee Supplier"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <p className="label">Taste</p>
          <input
            type="text"
            name="taste"
            placeholder="Coffee Taste"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <p className="label">Category</p>
          <input
            type="text"
            name="category"
            placeholder="Coffee Category"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <p className="label">Photo URL</p>
          <input
            type="text"
            name="photo"
            placeholder="Coffee Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control col-span-2">
          <p className="label">Details</p>
          <textarea
            type="text"
            name="details"
            placeholder="Coffee Details"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6 col-span-2 w-32 mx-auto">
          <button type="submit" className="btn normal-case">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
