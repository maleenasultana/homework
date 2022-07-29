import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <>
    <div className="container-fluid bg-secondary text-light p-5">
      <h1 className="display-4">Maleena's Blog page</h1>
      <p className="lead">
        <h1>Career in Full Stack Development</h1>
        Launch your career as a Full stack developer. 
        Build job-ready skills for an in-demand career and 
        earn a credential.
      </p>
      <hr className="my-4" />
      <p>Popular Stacks. MEAN stack: JavaScript - MongoDB - Express -
         AngularJS - Node.js</p>
      <a className="btn btn-success btn-lg" href="#">
        {" "}
        <h3>Ready to be One ! ??????</h3>{" "}
      </a>
    </div>
    </>
  );
}