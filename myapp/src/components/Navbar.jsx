import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>MCQ's</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button>
          {/* <Link to="/">Home</Link> */}
          Home
        </button>

        <button to="/add">Add</button>
      </div>
    </>
  );
}

export default Navbar;
