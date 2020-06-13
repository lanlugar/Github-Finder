import React from "react";
import NotFoundImg from "./404.svg";

const NotFound = () => {
  return (
    <div>
      <p className="lead text-light" style={{ textAlign: "center" }}>
        The Page you are looking for is not found
      </p>
      <img src={NotFoundImg} alt="Page Not Found" style={{ height: "350px" }} />
    </div>
  );
};

export default NotFound;
