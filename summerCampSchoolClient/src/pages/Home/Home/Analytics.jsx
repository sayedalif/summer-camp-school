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
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <p>{eachStat.classesCount} classes</p>
                <h1>{eachStat.membersCount} Members</h1>
                <h1>{eachStat.instructor} Teachers</h1>
                <h1>{eachStat.averageRating} Ratings</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Analytics;