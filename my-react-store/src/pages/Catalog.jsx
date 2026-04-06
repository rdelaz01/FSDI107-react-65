import Product from "../components/Product";
import"./Catalog.css";
import DataService from "../services/dataService";
import{useEffect, useState} from "react";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // to hold the categories data service will provide
    const [productsToDisplay, setProductsToDisplay] = useState([]); // to hold the products that we want to display (filtered by category)

    function loadCatalog(){
        let service = new DataService();
        let data = service.getProducts();
        setProductsToDisplay(data); //initially we want to display all the products, so we set the productsToDisplay to be the same as the products
        let cats = ["fruit", "berry"]; // we can get the categories from the products data, but for simplicity we will hardcode them here
        setCategories(cats);
    }

    function filter(category)
    {
        let list =[];
        //find the products that belong to the category that was clicked
        for(let i = 0; i < products.length; i++)
        {
            let prod = products[i];
            if(prod.category === category)
                {
                    list.push(prod);
                }
        }
        setProductsToDisplay(list);

    }

    // const products = [];
    useEffect(()=>
        {
            // load your data
            let service = new DataService();
            let data = service.getProducts();
            setProducts(data);
            loadCatalog();

    },[]); // the empty array mean this effect runs only once 
    return(
        <div className="catalog bg-light min-vh-100">
            <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
        <div className="container py-4">
        <h1 className="display-4 fw-bold">DaygoFrutas</h1>
        <p className="lead">The freshest harvest, delivered straight to your door.</p>
        </div>
        </div>
            {categories.map(cat => <button key={cat} onClick={() => filter(cat)}>{cat}</button>)}
            <br />
            {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
        </div>
    )
    
}
export default Catalog;