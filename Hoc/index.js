import Header from '../Components/Header'
import Footer from '../Components/Footer'

const HOC=({children,styles})=>{
    return <div style={{...styles}}>
    <Header/>
    {children}
    <Footer/>
    </div>
}

export default HOC