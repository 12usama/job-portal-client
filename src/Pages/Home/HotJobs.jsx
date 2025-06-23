import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-xi-one.vercel.app/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        //
        <div className='bg-red-50 py-5 '>
            <p className='text-2xl lg:text-6xl font-bold text-center mb-1 lg:mb-3 text-[#3b82f6]'>Hot <span className='text-[#ffaf33] '> Jobs </span> </p>
            <p className="px-2 lg:px-0 lg:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
                Discover <span className="text-blue-600 font-semibold">exciting roles</span> crafted for talent like you. Apply now and spark your career!
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobsCard job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;