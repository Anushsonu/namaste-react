import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const errMsg = useRouteError();
  console.log("Error msg :::", errMsg?.data);
  return (
    <>
      <div>OOPS ! Something went wrong.</div>
      <div>{errMsg?.data}</div>
    </>
  );
};

export default Error;
