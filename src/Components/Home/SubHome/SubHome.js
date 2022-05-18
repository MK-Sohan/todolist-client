import React from "react";
import Alltasks from "../Alltasks/Alltasks";
import Header from "../Header/Header";
import Singletask from "../Singletask/Singletask";
import Todoform from "../Todoform/Todoform";

const SubHome = () => {
  return (
    <div className="bg-slate-300">
      <Todoform></Todoform>
      <Alltasks></Alltasks>
    </div>
  );
};

export default SubHome;
