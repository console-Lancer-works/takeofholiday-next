import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export const Button=styled.button`

    background-color:#FEC02F;
    padding:10px;
    border:none;
    outline:none;
    border-radius:5px;
    margin:10px;
    cursor:pointer;
    box-shadow:0px 1px 4px 0px #151515;
    width:${props=>props.width||'150px'};
    color:${props=>props.color||'#181822'};
    font-size:${props=>props.size||'16px'};
    font-weight:${props=>props.weight||'normal'};
    ${props=>props.style};
`
export const Select=styled.select`


background-color:#222222;
padding:10px;
border:none;
outline:none;
border-radius:5px;
margin:10px;

color:${props=>props.color||'white'};
min-width:${props=>props.width||'150px'};
font-size:${props=>props.size||'16px'};
font-weight:${props=>props.weight||'normal'};
${props=>props.style};

`

export const Heading=styled.p`
color:${props=>props.color||'#151515'};
font-size:${props=>props.size||'22px'};
font-weight:bold;
letter-spacing:2px;
${props=>props.style}
`

export const Title=styled.p`
color:${props=>props.color||'#F9f9f9'};
font-size:16px;
font-weight:bold;
letter-spacing:2px;
${props=>props.style}

`
export const Paragraph=styled.p`

color:${props=>props.color||'#f9f9f9'};
font-size:${props=>props.size||'15px'};
${props=>props.style};
`

export const Stars=()=>{
        return <div style={{display:'flex',margin:'15px 0'}}>
                    <FontAwesomeIcon icon={faStar} color="#FEC02F"/>
                    <FontAwesomeIcon icon={faStar} color="#FEC02F"/>
                    <FontAwesomeIcon icon={faStar} color="#FEC02F"/>
                    <FontAwesomeIcon icon={faStar} color="#FEC02F"/>
                    <FontAwesomeIcon icon={faStar} color="#FEC02F"/>

                 </div>
}
const PriceBox=styled.div`

position:absolute;
background-color:white;
bottom:0px;
right:0px;
padding:15px;
border-top-left-radius:18px;

`
export const PriceTag=()=>{
    return <PriceBox>
        <Title color="#151515">₹250</Title>
    </PriceBox>
}

export const LogoBox=styled.div`
width:${props=>props.width||'20%'};
display:flex;
justify-content:center;
align-items:center;

${props=>props.style}

`
export const Point =styled.div`
width:10px;
height:10px;
border-radius:50%;
background-color:#FEC02F;


`
export const Input=styled.input`


background-color:#222222;
padding:10px;
border:none;
outline:none;
border-radius:5px;
margin:10px;
cursor:pointer;
box-shadow:0px 1px 4px 0px #151515;
width:${props=>props.width||'200px'};
color:${props=>props.color||'#f9f9f9'};
font-size:${props=>props.size||'16px'};
font-weight:${props=>props.weight||'normal'};
${props=>props.style};


`