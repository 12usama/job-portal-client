import React from 'react';

const Newslater = () => {
    return (
        <div>
            <div className="my-20 text-center bg-blue-100 py-10 px-4 rounded-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-4">Stay Updated With New Jobs</h3>
                <p className="text-gray-700 mb-6">Subscribe to receive weekly job updates directly to your inbox.</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full max-w-xs mb-2"
                />
                <br />
                <button className="btn btn-primary">Subscribe</button>
            </div>

        </div>
    );
};

export default Newslater;