import React from "react";
import Tourcard from "../TourCard/index";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
const Tours = () => {
  return (
    <div className="wrap">
      <div className="floatleft">
        <h3 style={{ textAlign: "center", padding: "10px 0px" }}>Filter By</h3>
        <hr></hr>
        <div
          style={{
            paddingLeft: "25px",
            paddingTop: "25px",
            backgroundColor: "red",
          }}
        >
          <select name="countries">
            <option value="">Countries</option>
            <option value="">Lorem Ipsum</option>
          </select>
          <select name="countries">
            <option value="">Cities</option>
            <option value="">Lorem Ipsum</option>
          </select>
          <select name="countries">
            <option value="">Tour Dates </option>
            <option value="">Lorem Ipsum</option>
          </select>
          <select name="countries">
            <option value="">Rooms </option>
            <option value="">Lorem Ipsum</option>
          </select>
          <select name="countries">
            <option value="">Adults </option>
            <option value="">Lorem Ipsum</option>
          </select>
          <select name="countries">
            <option value="">Children </option>
            <option value="">Lorem Ipsum</option>
          </select>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>Price</h3>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>
            Property Type
          </h3>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>
            star Reyting
          </h3>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>
            Fun Things To Do
          </h3>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>Facilities</h3>
          <h3 style={{ textAlign: "left", padding: "10px 0px" }}>
            Room Facilities
          </h3>
        </div>
      </div>
      <div className="floatright">
        <div className="panel">
          <p style={{ float: "left", padding: "15px" }}> Results:12</p>
          <button className="btn">New Tours</button>
          <button className="btn">Popular Tours</button>
          <button className="btn">Azerbaijan Tours</button>
        </div>
        <div
          style={{
            clear: "both",
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",

            flexWrap: "wrap",
          }}
        >
          <Tourcard></Tourcard> <Tourcard></Tourcard>
          <Tourcard></Tourcard> <Tourcard></Tourcard> <Tourcard></Tourcard>{" "}
          <Tourcard></Tourcard>
          <Tourcard></Tourcard> <Tourcard></Tourcard> <Tourcard></Tourcard>{" "}
          <Tourcard></Tourcard> <Tourcard></Tourcard> <Tourcard></Tourcard>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default Tours;
