import"./Product.css"
import QuantityPicker from "./QuantityPicker"

function Product() {
    return(
        <div className="product">
            <img src="#" alt="Product Image" />
            <h5>Product Name</h5>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QuantityPicker/>
        </div>
    )
}

export default Product;