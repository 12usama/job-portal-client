import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company} = useLoaderData();
    
    return (
        <div>
            <h2>Job details {title} </h2>
            {company}
        </div>
    );
};

export default JobDetails;