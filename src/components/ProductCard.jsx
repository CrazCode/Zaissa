import './productCard.css'

function ProductCard(props) {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} />
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap:"20px"}}>
                <p>{props.price}</p>
                <img src="../src/assets/svgs/cart-diamond.svg" />  
            </div>
        </div>
    )
}

export default ProductCard