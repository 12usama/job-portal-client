import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyCheckAlt, FaClock, FaBuilding } from 'react-icons/fa';

const JobDetails = () => {
    const job = useLoaderData();

    const {
        _id,
        title,
        company,
        company_logo,
        description,
        requirements,
        location,
        salaryRange,
        jobType,
        category,
        postedDate
    } = job;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    {company_logo && (
                        <img src={company_logo} alt={company} className="w-16 h-16 object-contain" />
                    )}
                    <div>
                        <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
                        <p className="text-gray-600 flex items-center gap-2">
                            <FaBuilding /> {company}
                        </p>
                    </div>
                </div>
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-primary">Apply Now</button>
                </Link>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{location}</span>
                </div>
                <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <FaMoneyCheckAlt className="text-green-500" />
                    <span>{salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}</span>
                </div>
                <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <FaClock className="text-orange-500" />
                    <span>{jobType}</span>
                </div>
                <div className="bg-base-200 p-4 rounded-lg flex items-center gap-3">
                    <span className="text-sm text-gray-500">Posted: {postedDate || "Recently"}</span>
                </div>
            </div>

            {/* Description */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
                <p className="text-gray-700">{description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {requirements?.map((req, idx) => (
                        <li key={idx}>{req}</li>
                    ))}
                </ul>
            </div>

            {/* Job Highlights */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Why You Should Apply</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Work in a fast-growing, innovative company</li>
                    <li>Competitive salary and performance bonuses</li>
                    <li>Flexible working hours and remote options</li>
                    <li>Opportunities for career advancement and skill development</li>
                    <li>Collaborative and supportive team environment</li>
                </ul>
            </div>
        </div>
    );
};

export default JobDetails;
