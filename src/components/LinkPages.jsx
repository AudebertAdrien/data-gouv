import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function LinkPages() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <Link to="auth">Auth</Link>
      </Breadcrumbs>
    </div>
  );
}

export default LinkPages;
