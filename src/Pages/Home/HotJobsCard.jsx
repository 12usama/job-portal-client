import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';



const HotJobsCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, salaryRange, description, location, jobType } = job;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex gap-2 m-2'>
            <figure>
                <img
                    className='w-16'
                    src={company_logo}
                    alt="Shoes" />
            </figure>
            
            <div>
                <h4 className='text-2xl'>{company}</h4>
                <p className='flex gap-1 items-center'> <FaMapMarkerAlt /> {location}</p>
            </div>
            </div>
            <div className="card-body">
            <div className="badge badge-soft badge-primary"> {jobType} </div>

                <div className='flex gap-2'>
                <h2 className="card-title">{title}</h2>
                <div className="badge badge-secondary">NEW</div>
                </div>
                <p>{description}</p>
                <div className='flex gap-1 flex-wrap'>
                    {
                        requirements.map(skill => <p className='border-white rounded-lg text-center px-2 bg-blue-100 hover:bg-gray-400'>{skill}</p>)
                    }
                </div>
                <div className="card-actions  justify-center items-center mt-4">
                    <p className='flex gap-1 items-center font-bold'><FaMoneyCheckAlt /> Salary: {salaryRange.min} - {salaryRange.max}  {salaryRange.currency} </p>
                    <Link to={`/job/${_id}`}>
                    <button className="btn btn-primary mt-2">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;