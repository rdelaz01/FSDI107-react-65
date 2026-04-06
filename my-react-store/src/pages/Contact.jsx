import React, { useState } from "react";

function Contact() {
    // for showing/hiding email
    const [isEmailVisible, setIsEmailVisible] = useState(false); // Set to false by default so they have to click

    // Functions to change the state
    function showEmail() {
        setIsEmailVisible(true);
    }

    function hideEmail() {
        setIsEmailVisible(false);
    }


    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* Header Section */}
            <div className="bg-success text-white py-5 mb-5 shadow-sm text-center">
                <div className="container py-4">
                    <h1 className="display-4 fw-bold">Contact DaygoFrutas</h1>
                    <p className="lead">We would love to hear from you!</p>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row shadow-lg rounded overflow-hidden">
                    
                    {/* Left Side: Form */}
                    <div className="col-md-7 bg-white p-5">
                        <h3 className="mb-4 text-success">Get in touch!</h3>
                        <form >
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control border-0 border-bottom rounded-0"
                                        placeholder="Name"
                                        
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control border-0 border-bottom rounded-0"
                                        placeholder="Email"
                                        
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control border-0 border-bottom rounded-0"
                                    placeholder="Subject"
                                    
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    className="form-control border-0 border-bottom rounded-0"
                                    rows="4"
                                    placeholder="Message"
                                    
                                ></textarea>
                            </div>
                            <button className="btn btn-success px-4 py-2 shadow">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Info Box */}
                    <div className="col-md-5 bg-success text-white p-5 d-flex flex-column justify-content-center">
                        <h3 className="mb-4">Contact us</h3>
                        <p><strong>Address:</strong> 198 West 21th Street, Suite 619 San Diego, CA 91977</p>
                        <p><strong>Phone:</strong> +1-619-235-5981</p>
                        
                        <div className="mb-3">
                            <strong>Email:</strong> 
                            {isEmailVisible ? (
                                <p className="fs-5 text-warning mb-1">daygofrutas@gmail.com</p>
                            ) : (
                                <p className="small mb-1">Click below to see our email</p>
                            )}
                            
                            <div className="btn-group w-100">
                                <button onClick={showEmail} className="btn btn-sm btn-dark">Show</button>
                                <button onClick={hideEmail} className="btn btn-sm btn-outline-light">Hide</button>
                            </div>
                        </div>

                        <p className="mb-0">
                            <strong>Hours:</strong><br/>
                            Monday - Friday: 7:30AM - 4:30PM
                        </p>
                    </div>

                </div>
            </div> 
        </div>
    );
}

export default Contact;