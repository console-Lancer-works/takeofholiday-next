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

const Ol = styled.ul`
  height: 10rem;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.progress-bar li {
    background: green;
    border-radius: 20px;
    width: 10px;
    height: 10px;
    z-index: 1;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5px;
      background: yellow;
      width: 2px;
      height: 3rem;
    }
  }
`;

const Progressbar = styled.div`
  background-color: whitesmoke;
`;

const Subprogressbar = styled.div`
  background-color: lightblue;
  height: 30px;
  margin-bottom: 5%;
`;

const UL = styled.ul`
  height: 500px;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const Li = styled.li`
  & {
    background: green;
    border-radius: 20px;
    width: 10px;
    height: 10px;
    z-index: 1;
    position: relative;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5px;
    background: yellow;
    width: 2px;
    height: 100vh;
  }
`;

const EachReview = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  padding: 25px 20px 15px 20px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.img``;
const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const UserName = styled.p`
  font-family: SFUIDisplay-Regular;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 5px;
`;
const UserProffession = styled.p`
  font-family: SFUIDisplay-Regular;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #6b737d;
  margin: 0;
`;
const ReviewStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ReviewStatusReachout = styled.p`
  font-family: SFUIDisplay-Regular;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-transform: uppercase;
  text-align: right;
  color: #30aabc;
  margin: 0;
`;

const DotsContainer = styled.div`
  background: #fff;
  position: relative;
  height: 20px;
  margin: 0 10px 0 0;
  text-align: left;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Dot = styled.div`
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  /*display: inline-block; */
  float: left;
  z-index: 2;
  margin-right: 10px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Ll = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  &:before {
    content: "";
    display: inline-block;
    width: 2px;
    background: red;
    position: absolute;
    left: 3px;
    top: 5px;
    height: calc(100% - 10px);
  }
  li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 15px;
    &:before {
      content: "";
      display: inline-block;
      width: 8px;
      height: 8px;
      background: red;
      position: absolute;
      left: 0;
      top: 5px;
      border-radius: 10px;
    }
  }
`;
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
                        <span style={{ paddingLeft: "70px" }}>15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "40%" }}>
                        <span style={{ paddingLeft: "100px" }}>15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "50%" }}>
                        <span style={{ paddingLeft: "140px" }}>15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "60%" }}>
                        <span style={{ paddingLeft: "70px" }}>15</span>
                      </Subprogressbar>
                    </Progressbar>
                    <Progressbar>
                      <Subprogressbar style={{ width: "30%" }}>
                        <span style={{ paddingLeft: "70px" }}>15</span>
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

            {panel === "Tour" ? (
              <>
                <div
                  style={{
                    width: "auto",
                  }}
                >
                  <Ll>
                    <li>
                      <p>Day 1: Arrival</p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          style={{
                            height: "120px",
                            width: "230px",
                            marginTop: "8%",
                            marginBottom: "8%",
                            marginRight: "15%",
                          }}
                          src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/Aliens.jpg?itok=kfbiuwSv"
                        />
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
                            Allow long words to be able to break and wrap onto
                            the next line:Allow long words to be able to break
                            and wrap onto the next line:Allow long words to be
                            able to break and wrap onto the next
                          </p>
                        </div>
                      </div>
                    </li>
                    <li style={{ marginBottom: "8%" }}>
                      {" "}
                      <p>Day 2: Arrival</p>
                    </li>
                    <li style={{ marginBottom: "8%" }}>
                      {" "}
                      <p>Day 3: Arrival</p>
                    </li>
                    <li style={{ marginBottom: "8%" }}>
                      {" "}
                      <p>Day 4: Arrival</p>
                    </li>
                    <li>
                      {" "}
                      <p>Day 5: Arrival</p>
                    </li>
                  </Ll>
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
