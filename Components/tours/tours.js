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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            overflow: "hidden",
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
          <h3>Price</h3>
          <p>
            <label for="range_weight">0</label>{" "}
            <input style={{ width: "75%" }} type="range" />
            <span class="slider_label">100</span>
          </p>

          <h3>Property Type</h3>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Hotels</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Beach</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Appartment</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Villas</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Resorts</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Vacation Homes</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Resorts</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Guest Houses</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Ocean View </label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Hotels</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Private Beach Area</label>
          </div>

          <h3>star Reyting</h3>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> 2 Star</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> 3 Star</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> 4 Star</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> 5 Star</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> UnRated</label>
          </div>

          <h3>Fun Things To Do</h3>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Bike Rental</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Hiking</label>
          </div>

          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Night Club</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Karoake</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Fitness Centre</label>
          </div>

          <h3>Facilities</h3>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Parking</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Restaurant</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Pet Friendly</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Room Service</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Bar</label>
          </div>

          <h3>Room Facilities</h3>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Kitchen</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Private Bathroom</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Air Conditioning</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Spa club</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> BathTub</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Terrace</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Balcony</label>
          </div>
          <div style={{ width: "80%", border: "none" }}>
            <input
              type="checkbox"
              className="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
            <label for="vehicle1"> Coffee Machine</label>
          </div>
        </div>
      </div>
      <div className="floatright">
        <div className="panel">
          <p style={{ padding: "15px" }}> Results:12</p>
          <div style={{ width: "50%" }}>
            <button className="btn">New Tours</button>
            <button className="btn">Popular Tours</button>
            <button className="btn">Azerbaijan Tours</button>
          </div>
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
          <Tourcard /> <Tourcard /> <Tourcard /> <Tourcard /> <Tourcard />{" "}
          <Tourcard /> <Tourcard />
          <Tourcard /> <Tourcard /> <Tourcard /> <Tourcard /> <Tourcard />{" "}
          <Tourcard /> <Tourcard />
          <Tourcard /> <Tourcard />
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default Tours;
