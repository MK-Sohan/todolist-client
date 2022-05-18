import React, { useEffect, useState } from "react";
import UseAlltasks from "../../Hooks/UseAlltasks";
import Singletask from "../Singletask/Singletask";

const Alltasks = () => {
  const [tasks, setTasks] = UseAlltasks();
  console.log(tasks);
  return (
    <div className="flex justify-center items-center flex-wrap gap-16 ">
      {tasks?.map((task) => (
        <Singletask key={task._id} task={task}></Singletask>
      ))}
    </div>
  );
};

export default Alltasks;
