import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from "./components/BlogCard";
import Blogs from "./components/Blogs";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="bg-dark text-center py-2 shadow-lg">
        <h1 className="text-white">React & Laravel Blog App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Blogs />}></Route>\
      </Routes>
      {/* bg-dark back-ground text-center py-2: Padding truc y, shadow-lg*/}
    </>
  );
}

export default App;
