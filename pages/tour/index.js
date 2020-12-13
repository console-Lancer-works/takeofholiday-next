import HOC from "../../Hoc";
import styled from "styled-components";
import Tours from "../../Components/tours/tours";
import Tourcard from "../../Components/TourCard/index";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const LeftWrapper = styled.div`
  float: left;
  width: 18%;
  background-color: white;
  height: auto;
  border-right: 7px solid grey;
`;

const RightWrapper = styled.div`
  float: right;

  height: auto;
  width: 82%;
`;
const Categories = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const Select = styled.select`
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  padding: 10px;
  height: 45px;
  border: none;
  display: inline-block;
  margin-bottom: 15px;
  box-sizing: border-box;
  font: inherit;
  line-height: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  width: 80%;
  background-repeat: no-repeat;
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position: right 15px top 1em, right 10px top 1em;
  background-size: 5px 5px, 5px 5px;
  background-color: rgb(202, 199, 199);
`;

const Checkbox = styled.div`
  width: 80%;
  border: none;
`;
const Panel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px !important;
  height: auto;
`;
const Button = styled.button`
  font-weight: 400;
  color: #000000;
  float: right;
  border: none;
  margin-right: 2%;
  display: flex;
  align-items: flex-end;
  text-align: center;
  padding: 15px;

  text-decoration: none;
  font-size: medium;
`;
export default function Tour() {
  return (
    <HOC>
      <Wrapper>
        <LeftWrapper>
          <h3 style={{ textAlign: "center", padding: "10px 0px" }}>
            Filter By
          </h3>
          <Categories
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Select name="countries">
              <option value="">Countries</option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <Select name="countries">
              <option value="">Cities</option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <Select name="countries">
              <option value="">Tour Dates </option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <Select name="countries">
              <option value="">Rooms </option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <Select name="countries">
              <option value="">Adults </option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <Select name="countries">
              <option value="">Children </option>
              <option value="">Lorem Ipsum</option>
            </Select>
            <h3>Price</h3>
            <p>
              <label for="range_weight">0</label>{" "}
              <input style={{ width: "75%" }} type="range" />
              <span class="slider_label">100</span>
            </p>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Hotels</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Beach</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Appartment</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Villas</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Resorts</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Vacation Homes</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Resorts</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Guest Houses</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Ocean View </label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Hotels</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Private Beach Area</label>
            </Checkbox>

            <h3>star Reyting</h3>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> 2 Star</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> 3 Star</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> 4 Star</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> 5 Star</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> UnRated</label>
            </Checkbox>

            <h3>Fun Things To Do</h3>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Bike Rental</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Hiking</label>
            </Checkbox>

            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Night Club</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Karoake</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Fitness Centre</label>
            </Checkbox>

            <h3>Facilities</h3>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Parking</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Restaurant</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Pet Friendly</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Room Service</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Bar</label>
            </Checkbox>

            <h3>Room Facilities</h3>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Kitchen</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Private Bathroom</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Air Conditioning</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> BathTub</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Terrace</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Balcony</label>
            </Checkbox>
            <Checkbox>
              <input
                type="checkbox"
                className="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1"> Coffee Machine</label>
            </Checkbox>
          </Categories>
        </LeftWrapper>
        <RightWrapper>
          <Panel>
            <p style={{ padding: "15px" }}> Results:12</p>
            <div style={{ width: "50%" }}>
              <Button className="btn">New Tours</Button>
              <Button className="btn">Popular Tours</Button>
              <Button className="btn">Azerbaijan Tours</Button>
            </div>
          </Panel>
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
        </RightWrapper>

        <div style={{ clear: "both" }}></div>
      </Wrapper>

      {/* <Tours></Tours> */}
    </HOC>
  );
}
