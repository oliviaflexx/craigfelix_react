import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h1 class="title">Error: No page found here</h1>
      <Link to="/" className="error-button">
        Back Home
      </Link>
    </main>
  );
};

export default Error;
