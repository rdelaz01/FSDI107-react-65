
function Home() {
return (
    <div className="bg-light min-vh-100">
    
    <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
        <div className="container py-4">
        <h1 className="display-4 fw-bold">Welcome to DaygoFrutas</h1>
        <p className="lead">The freshest harvest, delivered straight to your door.</p>
        </div>
    </div>


    <div className="container">
        <div className="row g-4 justify-content-center">


        <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden">
            <img 
                src="../images/apple.jpg"
                alt="Apples" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
            />
            <div className="card-body text-center">
                <h5 className="fw-bold">Crisp Apples</h5>
                <p className="text-muted small">Freshly picked from local orchards.</p>
                <button className="btn btn-outline-success w-100">Add to Bag</button>
            </div>
            </div>
        </div>


        <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden">
            <img 
                src="../images/oranges.jpg"
                alt="Oranges" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
            />
            <div className="card-body text-center">
                <h5 className="fw-bold">Juicy Oranges</h5>
                <p className="text-muted small">Bursting with Vitamin C and sunshine.</p>
                <button className="btn btn-outline-success w-100">Add to Bag</button>
            </div>
            </div>
        </div>

          {/* Strawberry Card */}
        <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm overflow-hidden">
            <img 
                src="../images/strawberries.jpg" 
                alt="Strawberries" 
                className="card-img-top" 
                style={{ height: '250px', objectFit: 'cover' }} 
            />
            <div className="card-body text-center">
                <h5 className="fw-bold">Sweet Strawberries</h5>
                <p className="text-muted small">The perfect summer treat for any time.</p>
                <button className="btn btn-outline-success w-100">Add to Bag</button>
            </div>
            </div>
        </div>

        </div>
    </div>

    
    </div>
);
}

export default Home;