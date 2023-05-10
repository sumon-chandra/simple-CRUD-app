import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl border" key={coffee._id}>
      <figure>
        <img src={coffee.photo} alt="" className="w-52" />
      </figure>
      <div className="card-body">
        <p className="card-title">{coffee.name}</p>
        <p>{coffee.details}</p>
      </div>
      <div className="card-actions justify-center gap-4 text-2xl py-3 bg-slate-200">
        <Link to={`/updateCoffee/${coffee._id}`}>
          <AiFillEdit className="cursor-pointer" />
        </Link>
        <AiFillEye className="cursor-pointer" />
        <AiFillDelete
          className="cursor-pointer"
          onClick={() => handleDelete(coffee._id)}
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
