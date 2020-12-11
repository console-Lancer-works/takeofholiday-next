import HOC from "../../Hoc";
import styled from "styled-components";
import React, { useState, setState } from "react";
import { Stars } from "../../Shared/index";
const Img = styled.img`
  width: 100%;
  height: 70vh;
`;
const Button = styled.button`
  font-weight: 400;
  color: #000000;
  border: none;
  margin-right: 1%;
  display: flex;
  align-items: flex-end;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: medium;
`;
const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8%;
  border: none;
  width: 80%;
  height: 40px;
  background-color: lightgrey;
  border-bottom: 2px solid black;
`;
const Body = styled.div`
  display: flex;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const Form = styled.div`
  background-color: white;
  padding-top: 10%;
  padding-bottom: 10%;
  box-shadow: 3px 3px 3px 3px #888888;
`;
const LeftBody = styled.div`
  width: 70%;
  padding-left: 8%;
  padding-right: 8%;
`;
const ReviewButton = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  font-weight: 400;
  background-color: lightblue;
  border: none;

  text-align: center;
  padding: 20px;
  text-decoration: none;
  font-size: medium;
`;
const RightBody = styled.div`
  width: 30%;
  margin-right: 5%;
`;
const Hr = styled.hr`
  margin-top: 25px;
  margin-bottom: 25px;
`;
const Ul = styled.div`
  display: flex;
`;

const Progressbar = styled.div`
  background-color: whitesmoke;
`;

const Subprogressbar = styled.div`
  background-color: lightblue;
  height: 30px;
  margin-bottom: 5%;
`;

const Tag = styled.div``;
export default function TourDetails() {
  const [panel, setPanel] = useState("Information");
  return (
    <HOC>
      <div>
        <Img src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Aliens.jpg?itok=kfbiuwSv" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Button className="btn" onClick={() => setPanel("Information")}>
            Information
          </Button>
          <Button className="btn" onClick={() => setPanel("Tour")}>
            Tour Map
          </Button>
          <Button className="btn" onClick={() => setPanel("Gallery")}>
            Gallery
          </Button>
          <Button className="btn" onClick={() => setPanel("Reviews")}>
            Reviews
          </Button>
        </div>
        <Body>
          <LeftBody>
            {panel === "Information" ? (
              <>
                <h1>Moscow new year Tour</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      backgroundColor: "blue",
                      marginRight: "5%",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                    className="btn"
                  >
                    $405
                  </Button>
                  <p>Per person</p>
                </div>
                <div
                  style={{
                    border: "5px solid grey",
                    display: "flex",
                    padding: "3%",
                    marginBottom: "3%",
                  }}
                >
                  <p style={{ marginRight: "35px" }}>15 days</p>
                  <p style={{ marginRight: "35px" }}>16+</p>
                  <p style={{ marginRight: "35px" }}>Featured Tour</p>
                </div>

                <div style={{ marginBottom: "3%" }}>
                  <p style={{ overflow: "hidden" }}>
                    loremloremloremloremloremloremloremloremloremloremloremloremlorem
                    <br></br>
                    loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
                    <br></br>
                    loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem{" "}
                  </p>
                </div>
                <div>
                  <Ul>
                    <h4 style={{ paddingRight: "10%" }}>Destinations</h4>
                    <p>Italy, Rome</p>
                  </Ul>
                  <Hr></Hr>
                  <Ul>
                    <h4 style={{ paddingRight: "10%" }}>Destinations</h4>
                    <p>Italy, Rome</p>
                  </Ul>{" "}
                  <Hr></Hr>
                  <Ul>
                    <h4 style={{ paddingRight: "10%" }}>Destinations</h4>
                    <p>Italy, Rome</p>
                  </Ul>{" "}
                  <Hr></Hr>
                  <Ul>
                    <h4 style={{ paddingRight: "10%" }}>Destinations</h4>
                    <p>Italy, Rome</p>
                  </Ul>
                  <Hr></Hr>
                  <Ul>
                    <h4 style={{ paddingRight: "10%" }}>Destinations</h4>
                    <p>Italy, Rome</p>
                  </Ul>
                </div>
              </>
            ) : null}

            {panel === "Reviews" ? (
              <>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "20%",
                      height: "20%",
                      border: "2px solid black",
                      paddingLeft: "2%",
                      paddingRight: "2%",
                      paddingTop: "1%",
                      paddingBottom: "1%",
                      boxShadow: " box-shadow: 3px 3px 3px 3px #888888;",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }}>8,2</h1>
                    <h3 style={{ textAlign: "center" }}>Superb</h3>
                  </div>
                  <div style={{ marginLeft: "4%", width: "80%" }}>
                    <Progressbar>
                      <Subprogressbar style={{ width: "30%" }}>
                        <span id="s">15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "40%" }}>
                        <span id="s">15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "50%" }}>
                        <span id="s">15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "60%" }}>
                        <span id="s">15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "30%" }}>
                        <span id="s">15</span>
                      </Subprogressbar>
                    </Progressbar>
                  </div>
                </div>
                <hr></hr>
                <div
                  style={{
                    margin: "5% 0%",
                    width: "auto",
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    boxShadow: " box-shadow: 3px 3px 3px 3px #888888;",
                  }}
                >
                  <h1 style={{ textAlign: "left", color: "lightgray" }}>
                    Knyaz Yaquov
                  </h1>
                  <p style={{ textAlign: "left", color: "lightgray" }}>
                    july1,2020 at 11:30 p.m.
                  </p>
                </div>

                <div
                  style={{
                    width: "70%",
                    height: "auto",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                    wordWrap: "break-word",
                  }}
                >
                  <p>
                    Allow long words to be able to break and wrap onto the next
                    line:Allow long words to be able to break and wrap onto the
                    next line:Allow long words to be able to break and wrap onto
                    the next
                  </p>
                </div>
                <div style={{ display: "flex", marginTop: "6%" }}>
                  <div style={{ display: "flex", marginRight: "20%" }}>
                    <h2 style={{ marginRight: "10%" }}> Overall</h2>
                    <Stars />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h2> Overall</h2>
                    <Stars />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "6%" }}>
                  <div style={{ display: "flex", marginRight: "20%" }}>
                    <h2 style={{ marginRight: "10%" }}> Overall</h2>
                    <Stars />
                  </div>
                  <div style={{ display: "flex" }}>
                    <h2> Overall</h2>
                    <Stars />
                  </div>
                </div>
              </>
            ) : null}
            {panel === "Gallery" ? (
              <>
                <div
                  style={{
                    width: "auto",

                    boxShadow: " box-shadow: 3px 3px 3px 3px #888888;",
                  }}
                >
                  <h1 style={{ textAlign: "left", color: "darkgray" }}>
                    Knyaz Yaquov
                  </h1>
                </div>
                <div
                  style={{
                    width: "70%",
                    height: "auto",
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    paddingTop: "8%",
                    paddingBottom: "8%",
                    wordWrap: "break-word",
                  }}
                >
                  <p>
                    Allow long words to be able to break and wrap onto the next
                    line:Allow long words to be able to break and wrap onto the
                    next line:Allow long words to be able to break and wrap onto
                    the next
                  </p>
                </div>
                <div>
                  <Img src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Aliens.jpg?itok=kfbiuwSv" />
                </div>
              </>
            ) : null}
          </LeftBody>

          <RightBody>
            <Form>
              {" "}
              <h1 style={{ textAlign: "center" }}>Book Now</h1>
              <Input style={{}} type="text" placeholder="Full name" />
              <Input type="text" placeholder="Tour Dates" />
              <Input type="email" placeholder="email" />
              <Input type="number" placeholder="Pno." />
              <ReviewButton>Books This Tour</ReviewButton>
            </Form>
            <div style={{ clear: "both" }}></div>
          </RightBody>
        </Body>
      </div>
    </HOC>
  );
}
