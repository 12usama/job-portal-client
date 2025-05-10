import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id, title, company} = useLoaderData();
    
    return (
        <div>
            <h2>Job details {title} </h2>
            {company}
            <Link to={`/jobApply/${_id}`} >
            <button className='btn'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;