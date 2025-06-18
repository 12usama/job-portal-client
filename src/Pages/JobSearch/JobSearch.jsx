import React from 'react';

const JobSearch = () => {
    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-6">Find Your Dream Job</h2>
            <p className="text-center text-gray-600 mb-8">
                Search through thousands of job listings and apply with one click!
            </p>

            {/* You can add real search functionality later */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <input
                    type="text"
                    placeholder="Search by title, keyword..."
                    className="input input-bordered w-full md:w-1/2"
                />
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
};

export default JobSearch;
