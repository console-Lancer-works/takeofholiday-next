import styled from "styled-components";
import { Paragraph, Title, Stars, PriceTag } from "../../Shared";

const Wrapper = styled.div`
  width: 280px;

  border-radius: 12px;
  background-color: #222222;
  overflow: hidden;
  margin: 10px 0;
  box-shadow: 1px 1px 6px 0px #151515;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
`;
const TourCard = ({ data }) => {
  return (
    <Wrapper>
      <ImageBox>
        <img
          src="https://i.pinimg.com/originals/95/4d/49/954d49b305b9344d69f0bcb341f0e698.png"
          width="100%"
          height="100%"
        />
      </ImageBox>
      <div style={{ padding: "5px 10px", position: "relative" }}>
        <Title>yash</Title>

        <Paragraph style={{ margin: "10px 0" }}>yash</Paragraph>

        <Paragraph color={"#FEC02F"}>4 night/3 days</Paragraph>
        <Stars/>
        {/*  <PriceTag/> */}
      </div>
    </Wrapper>
  );
};

export default TourCard;
{
  /* <Wrapper>
<ImageBox>
     <img src={data.imageUrl[0]} width="100%" height="100%"/>
</ImageBox>
<div style={{padding:'5px 10px',position:'relative'}}>
   <Title>{data.title}</Title>
 
   <Paragraph style={{margin:'10px 0'}}>{data.shortDesc.slice(0,60)}</Paragraph>
   
   <Paragraph color={"#FEC02F"}>{data.nights} night/{data.days} days</Paragraph>
   <Stars/>
  {/*  <PriceTag/> */
}
// </div>
// </Wrapper> */}
