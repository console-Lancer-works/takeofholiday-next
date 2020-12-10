import HOC from "../../Hoc";
import styled from "styled-components";

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
}
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
export default function TourDetails() {
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
          <Button className="btn">Information</Button>
          <Button className="btn">Tour Map</Button>
          <Button className="btn">Location</Button>
          <Button className="btn">Gallery</Button>
          <Button className="btn">Reviews</Button>
        </div>
        <Body>
          <LeftBody>
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
          </LeftBody>
          <RightBody>
            <Form>
              {" "}
              <h1 style={{ textAlign: "center" }}>Book Now</h1>
              <Input style={{}} type="text" placeholder="Full name" />
              <Input type="text" placeholder="Tour Dates" />
              <Input type="email" placeholder="email" />
              <Input type="number" placeholder="Pno." />
              <ReviewButton>Book This Tour</ReviewButton>
            </Form>
            <div style={{ clear: "both" }}></div>
          </RightBody>
        </Body>
      </div>
    </HOC>
  );
}
