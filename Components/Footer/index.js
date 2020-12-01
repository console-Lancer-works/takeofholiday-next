
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Link from 'next/link'

import { Paragraph,LogoBox, Title } from '../../Shared'
import {faFacebook,faInstagram,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faAt, faPhoneAlt,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Wrapper=styled.div`



background-color:#151515;
width:100%;
text-align:center;
padding:15px 0;
margin:0 auto;
`
const MainWrapper=styled.div`
display:flex;
flex-wrap:wrap;
width:80%;
margin:0 auto;

justify-content:space-around;
align-items:center;
`
const Box=styled.div`

display:flex;
flex-direction:column;

min-width:300px;
margin:10px 0;
justify-content:center;
align-items:center;
${props=>props.style};
`
const Footer=()=>{
    return <Wrapper>
            <MainWrapper>
                <Box >
                    <LogoBox width="50%" >
                    <img src={'/static/assests/LF.PNG'} width="250px" height="150px"/>
                    </LogoBox>
                    <div style={{display:'flex',marginTop:'20px'}}>
                            <FontAwesomeIcon icon={faWhatsapp} color="#FEC02F" size="2x" style={{margin:'5px'}}/>
                            <FontAwesomeIcon icon={faFacebook} color="#FEC02F" size="2x" style={{margin:'5px'}}/>
                            <FontAwesomeIcon icon={faInstagram} color="#FEC02F" size="2x" style={{margin:'5px'}}/>
                            <FontAwesomeIcon icon={faTwitter} color="#FEC02F"size="2x" style={{margin:'5px'}}/>
                    </div>
                </Box>
               <Box  >
                
                    <Title color="#FEC02F" >Information's</Title>
                    <div style={{marginTop:'15px'}}>
                    
                    <Link href=""><Paragraph>Services</Paragraph></Link>
                    <Link href=""><Paragraph>About us</Paragraph></Link>
                    <Paragraph>Contact us</Paragraph>
                    <Paragraph>Term &amp; Condition</Paragraph>
                    </div>
                    
                </Box>
                <Box >
                    <Title color="#FEC02F">Tours</Title>
                    <div style={{marginTop:'15px'}}>
                    <Paragraph>Goa Tours</Paragraph>
                    <Paragraph>Kerala Tours</Paragraph>
                    <Paragraph>Kashmir Tours</Paragraph>
                  
                    <Paragraph>Himachal Tours</Paragraph>
                    <Paragraph>Rajasthan Tours</Paragraph>
                    <Paragraph>Karnataka Tours</Paragraph>
                    

                    </div>
                </Box>
                <Box >
                    <Title color="#FEC02F">Contact</Title>
                    <div style={{marginTop:'15px',textAlign:'right'}}>
                    <Paragraph>Thanisandra main road,</Paragraph>
                    <Paragraph> saraipalya  Smart medical</Paragraph>
                    <Paragraph> Bangalore, karnataka</Paragraph>
                    <br></br>
                    <Paragraph><FontAwesomeIcon icon={faPhoneAlt} color="#F9F9F9" style={{marginRight:'5px'}}></FontAwesomeIcon>91+7829586700</Paragraph>
                    <Paragraph><FontAwesomeIcon icon={faEnvelope} color="#F9F9F9" style={{marginRight:'5px'}}></FontAwesomeIcon>info@takeoffholidays.com</Paragraph>
                    </div>
                </Box> 
            </MainWrapper>
            <div style={{padding:'10px 0',display:'flex',justifyContent:'space-around',flexWrap:'wrap',borderTop:'1px solid #F9F9F9'}}>
            <Paragraph>copyright &#169; 2020 ,All right reserved</Paragraph>
            <Paragraph>Developed By: Console Lancer</Paragraph>


            </div>

        </Wrapper>
}

export default Footer

/* background: rgb(30,68,115);
background: radial-gradient(circle, rgba(30,68,115,1) 0%, rgba(21,21,21,1) 100%); */