import {useState} from 'react';

function Admin(){
    //const [tate, setState] = useState(initialValue)
const[productTitle, setProductTitle] = useState("");
const[productCategory, setProductCategory] = useState("");
const[productImage, setProductImage] = useState("")
const[productPrice, setProductPrice] = useState("");
const[products, setProducts] = useState ([]);

function saveProducts() {
    console.log("saving product");

    const product ={
        title: productTitle,
        category: productCategory,
        image: productImage,
        price: productPrice
    }

    setProducts([...products , product])

    setProductTitle("")
    setProductCategory("")
    setProductImage("")
    setProductPrice("")
}



    return(
        <div className="bg-light min-vh-100">
            <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
                <div className="container py-4">
                    <h1 className="display-4 fw-bold">Store Administrations</h1>
                    <p className="lead">DaygoFrutas est 2024.</p>
                </div>
            </div>

        <section className="d-flex flex-column align-items-center justify-content-center">
            <h2>Add Products</h2>

            <div className="card w-50">
                <div className="card-body">
                    <div className="mb-4">
                        <label className="form-label">Title</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={productTitle}
                            onChange= {(event) => setProductTitle(event.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Category</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={productCategory}
                            onChange= {(event) => setProductCategory(event.target.value)}

                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Image<span className="text-secondary">(URL)</span></label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder='https://www.img.goku.com/2' 
                            value={productImage}
                            onChange= {(event)=> setProductImage(event.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Price</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={productPrice}
                            onChange= {(event)=> setProductPrice(event.target.value)}
                        />
                    </div>

                    <div>
                        <button className="btn btn-success btn-lg px-5 shadow" onClick={saveProducts} >Save Product</button>
                    </div>
                
                </div>
            </div>

            <hr/>

            <div className="container ">
                <h5>Product List</h5>

                {
                    products.length === 0
                    ? <p>There are no products</p>
                    : (
                    
                    <div className="row g-4 justify-content-center">
                        {products.map(product =>(

                            <div  className="col-md-4" key={product.title}> 
                            <div className="card h-100 border-0 shadow-sm overflow-hidden">
                                <img src={product.image} alt="product.title"
                                className="card-img-top"
                                style={{ height: '250px', objectFit: 'cover' }}
                                />
                                
                                <div className="card-body text-center">
                                    <p className="text-muted small">{product.category}</p>
                                    <h5 className="fw-bold">{product.title}</h5>
                                    <h6>${product.price}</h6>
                                </div>

                            </div>

                            </div>
                        ))}
                    </div>

                    )

                }

            {/* <pre>{JSON.stringify(products)}</pre>*/}

            </div>
        </section>

        
        </div>
    )
}


export default Admin;