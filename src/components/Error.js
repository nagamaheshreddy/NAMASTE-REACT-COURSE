import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>OOPS</h1>
      <h2> THERE IS ERROR IN ROUTING</h2>
      <h3>Message:{error.data}</h3>
      <h4>Status:{error.status}</h4>
    </div>
  );
};

export default Error;
