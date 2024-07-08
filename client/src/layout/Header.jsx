import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container p-2 my-2">
      {/* <img src={logo} alt="" className='img-fluid px-3' /> */}
      <div className="text-center">
        <div className="shadow py-3 mb-3 bg-body rounded">
          <h1 className="text-uppercase fw-bold">The Dev News</h1>
        </div>
        <p className="py-2">Journalism Without Fear or Favour</p>
        <p className="fw-bold text-primary">
          {moment().format("dddd, MMMM Do YYYY | h:mm:ss a")}
        </p>
      </div>
      {/* latest News */}
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
      </div>
    </div>
  );
};

export default Header;
