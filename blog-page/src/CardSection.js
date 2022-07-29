import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";



export default function CardSection() {
  return (
    <>
    <div className="bg-success mt-5">
      <div className="container">
        <h2 className="text-white">Explore the streams</h2>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}