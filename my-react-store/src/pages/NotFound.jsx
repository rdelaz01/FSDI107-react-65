import { Link } from 'react-router-dom';
function NotFound() {
    return(

        <div>
            <h1 className="bg-success bg-opacity10">404 - Not Found</h1>
            <p className="fs-3 text-decoration-line-through  ">Page not found</p>

        <Link className="btn btn-dark" to={"/"}>Go Home</Link>
        </div>
    )
}

export default NotFound;
