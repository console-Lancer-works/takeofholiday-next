import styled from 'styled-components'
import Link from 'next/link'
const Wrapper=styled.div`

background-color:#FFFFFF;

display:flex;
height:20vh;
width:90%;
justify-content:center;
`
const LogoBox=styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;

`
const NavBar=styled.nav`
width:80%;
display:flex;
justify-content:flex-end;
align-items:center;

& ul{
    list-style:none;
    
}
& ul li{
    display:inline;
    
    margin:0 15px;
  
    cursor:pointer;
    & a{
        text-decoration:none;
        color:rgb(0,0,0,0.9);
        
        font-size:18px;
        letter-spacing:1px;
    }
    &:last-child{
        margin-right:0;
    }
    
}

`
const Header=()=>{
    return <Wrapper>
            <LogoBox>
                <img src={'/static/assests/logo.PNG'}/>
            </LogoBox>
            <NavBar>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tour">Tours</Link></li>
                    <li><Link href="destination">Destination</Link></li>
                    <li><Link href="gallery">Gallery</Link></li>
                    <li><Link href="about">About us</Link></li>
                </ul>
            </NavBar>
        </Wrapper>
}

export default Header