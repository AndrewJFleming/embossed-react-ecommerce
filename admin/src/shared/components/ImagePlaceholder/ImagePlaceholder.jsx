import React from "react";

const ImagePlaceholder = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        alignItems: "center",
        backgroundColor: "lightgray",
      }}
    >
      <h6
        className="text-center p-5 m-0 font-italic"
        style={{
          opacity: "0.75",
        }}
      >
        Product Image
      </h6>
    </div>
  );
};

export default ImagePlaceholder;
