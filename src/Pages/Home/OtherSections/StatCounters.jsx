// StatCounters.jsx
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const StatCounters = () => {
  const [stats, setStats] = useState({
    jobsPosted: 0,
    applicationsReceived: 0,
  });

  useEffect(() => {
    fetch('http://localhost:3000/stats')
      .then(res => res.json())
      .then(setStats)
      .catch(console.error);
  }, []);

  const cards = [
    {
      label: 'Jobs Posted',
      value: stats.jobsPosted,
      color: 'border-blue-400 text-blue-600',
    },
    {
      label: 'Applications Received',
      value: stats.applicationsReceived,
      color: 'border-green-400 text-green-600',
    },
    // add more stats here if you like...
  ];

  return (
    <div className="py-16 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Our Impact in Numbers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map(({ label, value, color }, i) => (
          <motion.div
            key={i}
            className={`bg-white rounded-2xl shadow-lg p-6 border-l-8 ${color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <CountUp
              end={value}
              duration={2}
              separator=","
              className="text-5xl font-extrabold"
            />
            <p className="mt-2 text-gray-500 uppercase tracking-wide">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatCounters;
