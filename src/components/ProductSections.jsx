import ProductCard from "./ProductCard.jsx"
import "./productSections.css"


function ProductSections(props) {
    return (
        <div className="main-container">
            
            <div className="section-name">
                <h1>{props.title}</h1>
                <p>View All</p>
            </div>

            <div className="card-container">
                <ProductCard name="Lap1" image="src/assets/images/laptop1.jpg" price="1000$" />
                <ProductCard name="Lap2" image="src/assets/images/laptop.jpg" price="1200$" />
                <ProductCard name="Lap3" image="src/assets/images/laptop.jpg" price="1500$" />
            </div>
        </div>
    )
}

export default ProductSections