import React,{useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'
import {LogoBox} from '../../Shared'

const Wrapper=styled.div`

position:absolute;
background-color:#151515;
top:0;
left:0;
width:100%;
z-index:500;

`
const MainWrapper=styled.div`
padding:10px 0;
display:flex;
justify-content:center;
width:90%;
margin:0 auto;

@media screen and (max-width:768px){
    flex-direction:column;
    align-items:center;
}
`
const NavBar=styled.nav`
width:80%;
display:flex;
justify-content:flex-end;
align-items:center;

.Icons{
    display:none;
    position:absolute;
    top:35px;
    right:10px;
    @media screen and (max-width:768px){
        display:block;
    }
}
& ul{
    list-style:none;
  
    @media screen and (max-width:768px){
        display:${props=>props.show?'block':'none'};
        margin:0 auto;
    }
}


`
const Li=styled.li`
display:inline;
    
    margin:0 15px;
  
    cursor:pointer;
    & a{
        text-decoration:none;
        color:${props=>props.active?'#FEC02F':'#F9F9F9'};
        font-weight:bold;
        font-size:18px;
        letter-spacing:1px;
    }
    &:last-child{
        margin-right:0;
    }
    @media screen and (max-width:768px){
        display:block;
        margin:0;
        text-align:center;
        margin:10px 0;
    }
`
const Header=()=>{
    const [show,setShow]=useState(false)
    return <Wrapper show={show}>
        <MainWrapper>
            <LogoBox>
                <img src={'/static/assests/LH.png'} width="240px" height="80px"/>
                
            </LogoBox>
            
            <NavBar show={show}>
       
                <FontAwesomeIcon icon={show?faTimes:faBars} color="#DCDCDC" size="2x" className="Icons" onClick={()=>setShow(!show)}/>
                <ul>
                    <Li active={1}><Link href="/">Home</Link></Li>
                    <Li><Link href="/tour">Tours</Link></Li>
                    <Li><Link href="destination">Destination</Link></Li>
                    <Li><Link href="gallery">Gallery</Link></Li>
                    <Li><Link href="about">About us</Link></Li>
                </ul>
            </NavBar>
            </MainWrapper>
        </Wrapper>
}

export default Header