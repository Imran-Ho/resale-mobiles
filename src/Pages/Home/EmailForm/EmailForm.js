import React from 'react';

const EmailForm = () => {
    return (
        <div className=''
        
        >
            <div>
                <h2 className='text-3xl text-center text-primary mt-10 font-bold'>Contact Us</h2>
                <h2 className='text=1xl text-center text-secondary mb-10'>Stay connected with us</h2>
            </div>
            <div>
                <div className="hero">
                    <div className="">
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="email address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="subject" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea name="text" placeholder='your message' id="" cols="40" rows="3" className="textarea textarea-bordered"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;