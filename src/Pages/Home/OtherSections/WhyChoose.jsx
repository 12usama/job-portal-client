import React from 'react';

const WhyChoose = () => {
    return (
        <div>
            <section className="text-center max-w-5xl mx-auto py-16 px-4">
                <h3 className="text-3xl font-bold mb-6">Why Choose Our Portal?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-blue-500">Verified Jobs</h4>
                        <p className="text-gray-600 mt-2">Every job is reviewed and approved by our team.</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-green-500">Smart Matching</h4>
                        <p className="text-gray-600 mt-2">Get job suggestions based on your skills and interests.</p>
                    </div>
                    <div className="bg-white shadow p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-yellow-500">Easy Apply</h4>
                        <p className="text-gray-600 mt-2">One-click apply with your uploaded resume.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;