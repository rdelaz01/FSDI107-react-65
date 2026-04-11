import { useContext } from 'react';
import GlobalContext from '../state/globalContext';

function Profile() {
    const user = useContext(GlobalContext).user;

    return (
        <div className="bg-light min-vh-100">
            {/*Header */}
            <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
                <div className="container py-4">
                    <h1 className="display-4 fw-bold">My Profile</h1>
                    <p className="lead">Your personal information</p>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    
                    {/* Left card*/}
                    <div className="col-md-4 text-center mb-4">
                        <div className="bg-white p-4 border rounded shadow-sm">
                            <img 
                                src={user.avatar} 
                                alt="pfp" 
                                className="profile-img rounded-3 border" 
                                style={{ width: '350px', height: 'auto', objectFit: 'cover' }}
                            />
                            <h3>{user.firstName} {user.lastName}</h3>
                            <p className="text-secondary" >1-619-339-3124</p>
                            <p className="text-secondary">{user.email}</p>
                            <button className="btn btn-outline-success">Update Profile</button>
                        </div>
                    </div>

                    {/* Right card:*/}
                    <div className="col-md-6">
                        <div className="bg-white p-4 border rounded shadow-sm">
                            <h5 className="text-center fw-bold border-bottom pb-3 mb-3">SHIPPING INFORMATION</h5>
                            
                            <div className="d-flex justify-content-center gap-3">
                                <div className="text-end fw-bold text-muted">
                                    <p>Street:</p>
                                    <p>City:</p>
                                    <p>State:</p>
                                    <p>ZIP:</p>
                                </div>
                                <div>
                                    <p>{user.address.street}</p>
                                    <p>{user.address.city}</p>
                                    <p>{user.address.state}</p>
                                    <p>{user.address.zip}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Profile;