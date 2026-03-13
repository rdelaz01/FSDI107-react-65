import Product from "../components/Product";
import"./Catalog.css";
import DataService from "../services/dataService";
import{useEffect, useState} from "react";

function Catalog() {
    const [products, setProducts] = useState([]);
    // const products = [];
    useEffect(()=>
        {
            // load your data
            let service = new DataService();
            let data = service.getProducts();
            setProducts(data);

    },[]); // the empty array mean this effect runs only once 
    return(
        <div className="catalog">
            <h1>Check out our amazing products!</h1>
            {products.map(prod => <Product key={prod._id} data={prod} />)}
        </div>
    )
    
}
export default Catalog;