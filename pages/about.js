import HOC from '../Hoc'
import styled from 'styled-components'
import { Heading, Paragraph } from '../Shared'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

const Wrapper=styled.div`

display:flex;
flex-direction:column;
width:80%;
margin:25px auto;



align-items:center;
`

const AboutDiv=styled.div`

text-align:center;


`
const LogoWrapper=styled.div`

  display:flex;
  flex-wrap:wrap;
  margin:30px 0;
  ${props=>props.style}
  `
const LogoBox=styled.div`
  
  flex:6;
  padding:15px;
 background-color:#151515;
 border-radius:15px;
  margin:15px;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  min-width:250px;
 
  `
  const Para=styled(Paragraph)`
  
  margin:15px 0;
  font-weight:bold;
  
  @media screen and (max-width:768px){
    text-align:justify;
  }
  `
export default function About() {
    return (
      <HOC>
        <Wrapper>
        <AboutDiv>
        <Heading size="25px">TakeOffHoliday</Heading>
        <Para color="#151515" size="22px" >Travel is always at quality dvds ss affordable price !! Travel is the main thing you purchase that makes you more extravagant”. We take off holidays swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly. We have been moving excellent planning and friendly , knowledgeable staff with a personal touch and save your time and effort. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.</Para>
        </AboutDiv>
       <div width="100%">
          <img src={'/static/assests/about.svg'} width="100%" height="auto" />
       </div>
       <LogoWrapper style={{marginBottom:'0'}}>
         <LogoBox>
              
              <Heading color="#f9f9f9" size="16px">One Step Award</Heading>
                 {/*  <Paragraph >Travel is always at quality dvds ss  dvds ss  </Paragraph> */}
                 <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#f9f9f9" style={{marginLeft:'15px'}}/>
         </LogoBox>
         <LogoBox>
            
                      <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#f9f9f9" style={{marginRight:'15px'}}/>
                      <Heading color="#f9f9f9" size="16px">Adventure with TakeOffHoliday</Heading>
             {/*  <div style={{textAlign:'left',marginLeft:'15px'}}>
               
                   <Paragraph >Travel is always at quality dvds ss  dvds ss  </Paragraph>
              </div> */}
            
         </LogoBox>
        
       </LogoWrapper>
       <LogoWrapper style={{marginTop:'0'}}>
       <LogoBox>
             {/*  <div style={{textAlign:'right',marginRight:'15px'}}>
                  
                  <Paragraph >Travel is always at quality dvds ss  dvds ss  </Paragraph> 
              </div> */}
              
              <Heading color="#f9f9f9" size="16px">The Mother of All Trips</Heading>
              <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#f9f9f9" style={{marginLeft:'15px'}}/>
              
         </LogoBox>
         <LogoBox>
      
                      <FontAwesomeIcon icon={faPlaneDeparture} size="3x" color="#f9f9f9" style={{marginRight:'15px'}}/>
                      <Heading color="#f9f9f9" size="16px">Finding The Universe with Nikki</Heading>
            
             {/*  <div style={{textAlign:'left',marginLeft:'15px'}}>
                
                <Paragraph >Travel is always at quality dvds ss  dvds ss  </Paragraph> 
              </div> */}
         </LogoBox> 
       </LogoWrapper>
        </Wrapper>
      
  
      </HOC>
    )
  }
  