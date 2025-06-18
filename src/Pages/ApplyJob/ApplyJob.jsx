import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const ApplyJob = () => {

    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    //console.log(id,user);

    const sumbitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.Linkedin.value;
        const github = form.Github.value;
        const resume = form.Resume.value;
        //console.log(linkedin, github, resume);

        const jobApplication = {
            job_id : id,
            applicant_email : user.email,
            linkedin,
            github,
            resume
        }

        fetch('http://localhost:3000/job-applications',{
                
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Application submitted successfully');
                form.reset();
                navigate('/myApplications')
            }
        })

    }

    return (
        
                <div className=" max-w-xl mx-auto bg-white shadow-md rounded-xl mt-12 p-8">
                    <h1 className="text-5xl text-center font-bold mb-4">Apply now!</h1>
                    <div className="px-8">
                        <form onSubmit={sumbitJobApplication}>
                        <fieldset className="fieldset">
                            <label className="label">Linkedin URL</label>
                            <input type="url" name="Linkedin" className="input w-full" placeholder="Linkedin URL" />
                            <label className="label">Github URL</label>
                            <input type="url" name='Github' className="input w-full" placeholder="Github URL" />
                            <label className="label">Resume URL</label>
                            <input type="url" name='Resume' className="input w-full" placeholder="Resume URL" />
                            <button className="btn btn-neutral mt-4">Apply</button>
                        </fieldset>
                        </form>
                    </div>
                </div>
    );
};

export default ApplyJob;