import React from 'react';
import Banner from './Banner/Banner';
import HotJobs from './HotJobs';
import WhyChoose from './OtherSections/WhyChoose';
import TrustedCompany from './OtherSections/TrustedCompany';
import StatCounters from './OtherSections/StatCounters';
import Testimonials from './OtherSections/Testimonials';
import Newslater from './OtherSections/Newslater';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <HotJobs></HotJobs>
            <StatCounters></StatCounters>
            <TrustedCompany></TrustedCompany>
            <Testimonials></Testimonials>
            <Newslater></Newslater>
            
        </div>
    );
};

export default Home;