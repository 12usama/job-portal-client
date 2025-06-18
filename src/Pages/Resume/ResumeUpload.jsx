import React, { useState } from 'react';

const ResumeUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (file) {
            alert(`Resume "${file.name}" uploaded successfully!`);
            // Later: send to backend or Firebase
        } else {
            alert("Please select a file first.");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Upload Your Resume</h2>
            <p className="mb-6 text-gray-600 text-center">
                Increase your chances by uploading your professional resume. Recruiters can find you faster!
            </p>
            <form onSubmit={handleUpload} className="flex flex-col gap-4">
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="file-input file-input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary w-full">Upload Resume</button>
            </form>
        </div>
    );
};

export default ResumeUpload;
