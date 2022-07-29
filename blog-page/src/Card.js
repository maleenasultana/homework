import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  return (
    <>
    <div className="card" style={{ width: "18rem" }}>
      <img
        src=" https://www.bing.com/th?id=OIP.v5yOgrGYbWmPJr58hzpEowHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Streams </h5>
        <p className="card-text">
         <h3>Many fields to land in................</h3>
        </p>
        <a className="btn btn-success" href="#">
          Challenges...
        </a>
      </div>
    </div>
    </>
  );
}