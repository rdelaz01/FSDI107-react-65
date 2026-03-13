import Product from "../components/Product";
import"./Catalog.css";

function Catalog() {
    return(
        <div className="catalog">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
    
}
export default Catalog;