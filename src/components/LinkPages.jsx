import React from "react";
import { Link } from "react-router-dom";

function LinkPages() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="auth">Auth</Link>
    </div>
  );
}

export default LinkPages;
