import React from "react";

const AddJob = () => {
    const handleAddJob = async (e) => {
        e.preventDefault();
        const form = e.target;
      
        const jobData = {
          title: form.title.value,
          location: form.location.value,
          jobType: form.jobType.value,
          category: form.category.value,
          applicationDeadline: form.applicationDeadline.value,
          salaryRange: {
            min: parseInt(form.minSalary.value),
            max: parseInt(form.maxSalary.value),
            currency: form.currency.value,
          },
          
          description: form.description.value,
          company: form.company.value,
          requirements: form.requirements.value.split(',').map(item => item.trim()),
          responsibilities: form.responsibilities.value.split(',').map(item => item.trim()),
          status: form.status.value,
          hr_email: form.hr_email.value,
          hr_name: form.hr_name.value,
        };
      
        try {
          const response = await fetch('https://job-portal-server-xi-one.vercel.app/jobs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
          });
      
          if (response.ok) {
            alert('Job added successfully!');
            form.reset();
          } else {
            alert('Failed to add job.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred.');
        }
      };
      

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="card shadow-xl bg-base-100">
                <div className="card-body">
                    <div className="p-8 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">Add a Job</h2>
                        <form onSubmit={handleAddJob} className="space-y-4">
                            <div>
                                <label className="label">Job Title</label>
                                <input name="title" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Location Name</label>
                                <input name="location" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Google Map URL</label>
                                <input name="map" type="url" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Job Type</label>
                                <select name="jobType" className="select select-bordered w-full">
                                    <option>Onsite</option>
                                    <option>Remote</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">Category</label>
                                <input name="category" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Application Deadline</label>
                                <input name="applicationDeadline" type="date" className="input input-bordered w-full" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="label">Min Salary</label>
                                    <input name="minSalary" type="number" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">Max Salary</label>
                                    <input name="maxSalary" type="number" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">Currency</label>
                                    <input name="currency" type="text" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div>
                                <label className="label">Company Name</label>
                                <input name="company" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Job Description</label>
                                <textarea name="description" className="textarea textarea-bordered w-full" required></textarea>
                            </div>
                            <div>
                                <label className="label">Requirements (comma separated)</label>
                                <input name="requirements" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Responsibilities (comma separated)</label>
                                <input name="responsibilities" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">Job Status</label>
                                <select name="status" className="select select-bordered w-full">
                                    <option value="active">Active</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">HR Name</label>
                                <input name="hr_name" type="text" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <label className="label">HR Email</label>
                                <input name="hr_email" type="email" className="input input-bordered w-full" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-full">Add Job</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AddJob;
