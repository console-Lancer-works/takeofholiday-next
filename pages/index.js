import styled from 'styled-components'

import SearchFilter from '../Components/SearchFilter'
import HOC from '../Hoc'
import {Button, Heading,Paragraph} from '../Shared'
import TourCard from '../Components/TourCard'
import ServiceCard from '../Components/ServicesCard'



const AreaWrapper=styled.div`
width:90%;margin:25px auto;


`
export default function Home() {
  return <HOC>
      <div style={{height:'80vh',position:'relative',display:'flex',justifyContent:'center',marginBottom:'80px'}}>
        <img src={'/static/assests/cover.jpg'} width="100%" height="100%"/>
        <SearchFilter/> 
      </div>
      <AreaWrapper>
            <div style={{margin:'30px 0'}}>
              <Heading>New Tours</Heading>
              <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',margin:'15px 0'}}>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>

              </div>
            </div>
            <div style={{margin:'30px 0'}}>
              <Heading>Popular Tours</Heading>
              <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',margin:'15px 0'}}>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>

              </div>
            </div>
            <div style={{margin:'30px 0'}}>
              <Heading>Offers Tours</Heading>
              <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',margin:'15px 0'}}>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>
                  <TourCard/>

              </div>
            </div>
      </AreaWrapper>
      <AreaWrapper>
            <div style={{margin:'30px 0'}}>
              <Heading>Services</Heading>
              <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',margin:'15px 0'}}>
                  <ServiceCard/>
                  <ServiceCard/>
                  <ServiceCard/>
                  <ServiceCard/>

              </div>
            </div>
      </AreaWrapper>
      <AreaWrapper>
      <div style={{margin:'60px 0'}}>
              
              <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style={{minWidth:'300px',flex:6}}>
                <Heading>Why us ?</Heading>
                  <div style={{margin:'10px 0'}}>
                <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>
                <br/>
                <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
                <br/>
                <Button style={{margin:0}}>Details</Button>
                </div>
                </div>
                <div style={{minWidth:'300px',flex:6,marginLeft:'10px'}}>
                  <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
                </div>
              </div>
              
            </div>
      </AreaWrapper>
      <AreaWrapper>
      <div style={{margin:'60px 0'}}>
              
              <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style={{minWidth:'300px',flex:6,marginRight:'10px'}}>
                  <img src={'static/assests/cover.jpg'} width="100%" height="100%"/>
                </div>
                <div style={{minWidth:'300px',flex:6}}>
                <Heading>Having Trouble choosing city ?</Heading>
                  <div style={{margin:'10px 0'}}>
                <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit,consectetur adipiscing elit,consectetur adipiscing elit, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Paragraph>
                <br/>
               {/*  <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
                <br/> */}
                <Button style={{margin:0}}>Details</Button>
                </div>
                </div>
               
              </div>
              
            </div>
      </AreaWrapper>
   
   
    </HOC>
  
}
