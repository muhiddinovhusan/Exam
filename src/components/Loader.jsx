import React from 'react'
import { ClipLoader } from "react-spinners";

const Loader = () => {
  
    const override = {
      display: "block",
      margin: "0 auto",
      borderColor: "red",
    };
  
    return (
      <ClipLoader
        color={"white"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  
}

export default Loader