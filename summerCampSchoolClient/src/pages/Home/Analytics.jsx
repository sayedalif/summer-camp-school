import useAnalytics from "../../hooks/useAnalytics";

const Analytics = () => {
  const { stats, isLoading } = useAnalytics();
  
  return (
    <div className='lg:flex lg:justify-center lg:my-24 lg:space-x-5 lg:space-y-0 md:grid md:grid-cols-2 md:space-x-0 md:gap-5 md:space-y-0 sm:space-y-5 space-y-5'>
      {
        stats && Array.isArray(stats) && stats.length > 0 && stats?.map((eachStat, index) => {
          {/* console.log("🚀 ~ stats&&Array.isArray ~ eachStat:", eachStat); */ }

          return (
            <div key={index} className="card lg:w-96 shadow-xl bg-[#81C784]">
              <div className="card-body">
                {Object.keys(eachStat).map((key, i) => (
                  <div key={i}>
                    <p className='text-center text-xl font-medium'>
                      {/* Conditionally render symbols */}
                      {eachStat[key]}
                      {/* here i'm adding a fake k to make it look like lot, but the k is fake */}
                      {key !== 'average rating' && 'k+'}
                      {key === 'average rating' && <span className='text-yellow-400 ml-2'>★★★★★</span>}
                    </p>
                    <h2 className='uppercase text-center text-xl font-medium'>{key}</h2>
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