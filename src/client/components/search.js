import Navbar from "./navbar";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <h1>search results here = {location.state}</h1>
    </div>
  );
}
