import React from "react";
import UseAlltasks from "../../Hooks/UseAlltasks";

const Singletask = ({ task, refetch }) => {
  //   const [tasks, setTasks] = UseAlltasks();
  //   console.log(task);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      fetch(`http://localhost:5000/task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div class="card w-96 bg-base-100 shadow-xl mb-24 ">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{task.name}</h2>
        <p>{task.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-success">Confirm</button>
          <button
            onClick={() => handleDelete(task._id)}
            class="btn btn-sm btn-error"
          >
            Delet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singletask;
