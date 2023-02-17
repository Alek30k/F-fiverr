import React from "react";
import "./Gigs.scss";

const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />s
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gigs;
