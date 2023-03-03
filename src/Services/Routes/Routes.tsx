import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/HomePage/Homepage";
import MovieDetail from "../../Pages/MovieDetail/MovieDetail";
import NotFound from "../../Pages/NotFound/NotFound";

const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path={"/"} />
        <Route element={<MovieDetail />} path={"movie/:movieId"} />
        <Route element={<NotFound/>} path={"*"}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;