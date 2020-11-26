import styled from 'styled-components'



export const Button=styled.button`

    background-color:#00B2CF;
    padding:5px;
    border:none;
    outline:none;
    border-radius:5px;
    margin:10px;
    width:${props=>props.width||'150px'};
    color:${props=>props.color||'white'};
    font-size:${props=>props.size||'16px'};
    font-weight:${props=>props.weight||'normal'};
    ${props=>props.style};
`
export const Select=styled.select`


background-color:white;
padding:8px;
border:none;
outline:none;
border-radius:5px;
margin:10px;
box-shadow:1px 1px 2px 0px rgb(0, 0, 0,0.5);
color:${props=>props.color||'rgb(0, 0, 0,0.5)'};
min-width:${props=>props.width||'150px'};
font-size:${props=>props.size||'16px'};
font-weight:${props=>props.weight||'normal'};
${props=>props.style};
`

export const Heading=styled.p`
color:rgb(0,0,0,0.9);
font-size:22px;
font-weight:bold;
letter-spacing:2px;

`
export const Paragraph=styled.p`

color:rgb(0,0,0,0.9);
font-size:14px;



`