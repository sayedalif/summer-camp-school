import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Analytics = () => {

  const [stats, setStats] = useState('');
  console.log("🚀 ~ Analytics ~ stats:", stats);

  const [axiosPublic] = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic('/stats');
      const data = response.data;
      setStats(data);
    }
    fetchData();
  }, []);

  return (
    <div className='flex justify-center my-8 space-x-5'>
      {
        stats && Array.isArray(stats) && stats.length > 0 && stats?.map((eachStat, index) => {
          console.log("🚀 ~ stats&&Array.isArray ~ eachStat:", eachStat);

          return (
            <div key={index} className="card w-96 shadow-xl bg-[#81C784]">
              <div className="card-body">
                {Object.keys(eachStat).map((key, i) => (
                  <div key={i}>
                    <p className='text-center'>
                      {/* Conditionally render symbols */}
                      {eachStat[key]}
                      {key !== 'average rating' && 'k+'}
                      {key === 'average rating' && '★★★★★'} 
                    </p>
                    <h2 className='uppercase text-center'>{key}</h2>
                  </div>
                ))}
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Analytics;