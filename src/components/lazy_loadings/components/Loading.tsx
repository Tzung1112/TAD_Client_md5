import React from "react";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading_container">
      <img
        className="rotating-image"
        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
      />
    </div>
  );
}
