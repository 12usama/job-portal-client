import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';

const MyApplications = () => {
    const { user } = useAuth();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl">My applications {jobs.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job</th>
                            <th>Company</th>
                            <th>Job Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            jobs.map(job =>  <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50"> {job.category} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.company}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job.location}</span>
                                </td>
                                <td> {job.jobType} </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;