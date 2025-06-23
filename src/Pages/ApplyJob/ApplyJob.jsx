import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const ApplyJob = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.Linkedin.value;
        const github = form.Github.value;
        const resume = form.Resume.value;

        if (!resume.startsWith("http")) {
            setError('Resume URL must be a valid link (Google Drive, Dropbox, etc.)');
            return;
        }

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        };

        fetch('https://job-portal-server-xi-one.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                setSuccess('✅ Application submitted successfully!');
                setError('');
                form.reset();
                setTimeout(() => navigate('/myApplications'), 1500);
            } else {
                setError('❌ Submission failed. Please try again.');
            }
        })
        .catch(() => setError('❌ Server error. Please try again later.'));
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl mt-12 p-8">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Apply for This Job</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium text-gray-700">LinkedIn URL *</label>
                    <input
                        type="url"
                        name="Linkedin"
                        required
                        placeholder="https://linkedin.com/in/yourname"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">GitHub URL *</label>
                    <input
                        type="url"
                        name="Github"
                        required
                        placeholder="https://github.com/yourname"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Resume URL (Google Drive, Dropbox, etc.) *</label>
                    <input
                        type="url"
                        name="Resume"
                        required
                        placeholder="https://drive.google.com/..."
                        className="input input-bordered w-full"
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">{success}</p>}

                <button type="submit" className="btn btn-primary w-full">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyJob;
