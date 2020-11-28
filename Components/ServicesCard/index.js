
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Paragraph } from '../../Shared'

const Wrapper=styled.div`


`
const ServiceCard=({icon,text})=>{
    return <div style={{margin:'10px 0',textAlign:'center'}}>
            <FontAwesomeIcon icon={icon} size="4x" color="#222222"/>
         <Paragraph style={{margin:'10px 0',color:'#151515',fontWeight:'bold'}}>{text}</Paragraph>
        </div>
}

export default ServiceCard