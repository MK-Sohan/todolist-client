import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const UseAlltasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [tasks]);
  return [tasks, setTasks];
};

export default UseAlltasks;
