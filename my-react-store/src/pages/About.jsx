import { Link } from 'react-router-dom';

function About() {
return (

    <div className="bg-light min-vh-100">
    
    <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
        <div className="container py-4">
        <h1 className="display-4 fw-bold">About DaygoFrutas</h1>
        <p className="lead">The freshest harvest, delivered straight to your door.</p>
        </div>
    </div>
    


    <div className="container my-5">
    <div className="row align-items-center shadow-sm rounded overflow-hidden bg-white border">
        
        <div className="col-md-6 p-0">
        <img 
            src="../images/strawberries.jpg" 
            alt="Fresh Fruit" 
            className="img-fluid w-100 h-100" 
            style={{ objectFit: 'cover', minHeight: '400px' }}
        />
        </div>


        <div className="col-md-6 p-5">
        <h6 className="text-success fw-bold text-uppercase mb-2">Since 2024</h6>
        <h1 className="display-4 fw-bold text-warning mb-4">DaygoFrutas</h1>

        <p className="lead text-muted mb-4">
            We bring the freshest, most vibrant flavors of the season straight to your table. 
            Located in the heart of the city, DaygoFrutas is your local destination for 
            hand-picked, organic produce.
        </p>


        <div className="row g-3 mb-4">
            <div className="col-6">
            <div className="p-3 bg-light border-start border-success border-4 rounded">
                <h5 className="mb-1">100% Organic</h5>
                <small className="text-muted">No pesticides</small>
            </div>
            </div>
            <div className="col-6">
            <div className="p-3 bg-light border-start border-warning border-4 rounded">
                <h5 className="mb-1">Local Farm</h5>
                <small className="text-muted">Picked daily</small>
            </div>
            </div>
        </div>

        <Link to="/">
            <button className="btn btn-success btn-lg px-5 shadow">
            Shop Fresh
            </button>
        </Link>
        </div>
    </div>
    </div>
    </div>
);
}

export default About; 