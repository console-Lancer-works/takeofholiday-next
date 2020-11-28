import styled from 'styled-components'
import {Button,Select,Input} from '../../Shared'

const Wrapper=styled.div`
width:90%;
padding:30px;
background-color:#151515;
display:flex;
justify-content:space-around;
align-items:center;
box-shadow:1px 1px 6px 0px #151515;
border-radius:12px;
flex-flow:wrap;
position:absolute;
bottom:-50px;
`
const SearchFilter=()=>{
    return <Wrapper>
          <Select width="200px">
          <option selected disabled>Countries</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          </Select>
          <Select width="200px">
          <option selected disabled>Cities</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          </Select>
          <Input type="date"/>
          <Button width="200px">Search</Button>
        </Wrapper>
}

export default SearchFilter