import React from "react";
import notfoundpage from "../Assets/404_page_cover.jpg";

function NotFound() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          width: "60%",
          height: "100%",
          margin: "auto",
        }}
        src={notfoundpage}
        alt="not found"
      />
    </div>
  );
}

export default NotFound;
