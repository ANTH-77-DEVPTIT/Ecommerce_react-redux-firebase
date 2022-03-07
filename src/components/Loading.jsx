import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center loader">
        <div className="spinner-border text-primary" role="status"></div>
        <p style={{ color: "red" }}>Chờ tí nhên</p>
      </div>
    </div>
  );
};

export default Loading;
