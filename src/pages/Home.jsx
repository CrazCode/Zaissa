import './home.css'
// import '../index.css'
import ImageSlider from '../components/ImageSlider.jsx'
import TechLogos from '../components/TechLogos.jsx'
import ProductSections from '../components/ProductSections.jsx'

function Home() {
    
    return (
        <div className='home-container'>
        <ImageSlider />
        <TechLogos />
        <div className='products-container'>
          <ProductSections title="Laptops" />
          <ProductSections title="Mobiles" />
          <ProductSections title="Earpods" />   
        </div>
        
        </div>
    )
}

export default Home