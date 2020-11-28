import Header from '../Components/Header'
import Footer from '../Components/Footer'
import styled from 'styled-components'

const Wrapper=styled.div`
margin:0 auto;
width:100%;
position:relative;
padding-top:100px;

background:#f9f9f9;
`
const HOC=({children,styles})=>{
    return <Wrapper>
    <Header/> 
    {children}
    <Footer/>
    </Wrapper>
}

export default HOC