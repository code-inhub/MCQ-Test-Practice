import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>MCQ's</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button>
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/Add">Add</Link>
        </button>
      </div>
    </>
  );
}

export default Navbar;
