import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
                My Job Applications ({jobs.length})
            </h2>

            {
                jobs.length === 0 ? (
                    <div className="text-center mt-20">
                        <p className="text-lg text-gray-500 mb-4">You haven’t applied for any jobs yet.</p>
                        <Link to="/">
                            <button className="btn btn-primary">Apply from here</button>
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="table w-full bg-white">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th></th>
                                    <th className="text-blue-600">Job Details</th>
                                    <th className="text-blue-600">Company</th>
                                    <th className="text-blue-600">Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    jobs.map((job, index) => (
                                        <tr key={job._id} className="hover:bg-gray-50 transition-all">
                                            <td>
                                                <label>
                                                    <input type="checkbox" className="checkbox checkbox-sm" />
                                                </label>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-4">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={job.company_logo} alt="Company Logo" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">{job.title}</div>
                                                        <div className="text-sm text-gray-500">{job.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className="font-medium">{job.company}</p>
                                                    <span className="badge badge-outline badge-sm">{job.location}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge badge-info text-white">{job.jobType}</span>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

            {/* Explore More Section */}
            <div className="mt-12 bg-base-100 p-6 rounded-xl shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-2">Need more opportunities?</h3>
                <p className="text-gray-600 mb-4">Explore thousands of open jobs waiting for you.</p>
                <Link to="/job search">
                    <button className="btn btn-primary">Go to Job Search</button>
                </Link>
            </div>
        </div>
    );
};

export default MyApplications;
