import React from 'react';
import { SiGoogle, SiMeta, SiTesla, SiAmazon } from 'react-icons/si';

const TrustedCompany = () => {

    const companies = [
        { name: 'Google', Icon: SiGoogle },
        { name: 'Meta', Icon: SiMeta },
        { name: 'Tesla', Icon: SiTesla },
        { name: 'Amazon', Icon: SiAmazon },
    ];

    return (
        <div>
            <section className="text-center py-16 px-4">
                <h3 className="text-3xl font-bold mb-4">Trusted by Top Companies</h3>
                <p className="text-gray-600 mb-8">Join thousands of job seekers hired by leading organizations</p>
                <div className="flex justify-center flex-wrap gap-8">
                    {companies.map(({ name, Icon }, idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center"
                            title={name}
                        >
                            <Icon className="text-4xl text-gray-700" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TrustedCompany;