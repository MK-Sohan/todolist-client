import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SubHome from "./Components/Home/SubHome/SubHome";
import Login from "./Components/Authentication/Login/Login";
import Signup from "./Components/Authentication/Signup/Signup";
import Header from "./Components/Home/Header/Header";
import RequireAuth from "./Components/Requireauth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <SubHome></SubHome>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
