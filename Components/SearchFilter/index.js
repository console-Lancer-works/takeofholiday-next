import styled from 'styled-components'
import {Button,Select} from '../../Shared'

const Wrapper=styled.div`
width:90%;
padding:30px;
background-color:white;
display:flex;
justify-content:space-around;
box-shadow:1px 1px 2px 0px rgb(0,0,0,0.5);
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
          <Select width="200px">
          <option selected disabled>Tours Dates</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          </Select>
          <Button width="200px">Search</Button>
        </Wrapper>
}

export default SearchFilter