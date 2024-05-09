import useFetch from "../../hooks/utils/utils";

const Analytics = () => {
  const { data: stats = [], loading, error } = useFetch('/stats');

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1 className="text-center text-red-500 text-2xl mt-10">{error?.message}</h1>
  }

  return (
    <div className='lg:flex lg:justify-center lg:my-24 lg:space-x-5 lg:space-y-0 md:grid md:grid-cols-2 md:space-x-0 md:gap-5 md:space-y-0 md:my-10 sm:space-y-5 sm:my-0 space-y-5 my-10'>
      {
        stats && Array.isArray(stats) && stats.length > 0 && stats?.map((eachStat, index) => {
          {/* console.log("🚀 ~ stats&&Array.isArray ~ eachStat:", eachStat); */ }

          return (
            <div key={index} className="card lg:w-96 shadow-xl bg-[#003a55]">
              <div className="card-body">
                {Object.keys(eachStat).map((key, i) => (
                  <div key={i}>
                    <p className='text-center text-xl font-medium text-[#00ff84]'>
                      {/* Conditionally render symbols */}
                      {eachStat[key]}
                      {/* here i'm adding a fake k to make it look like lot, but the k is fake */}
                      {key !== 'average rating' && key >= 1000 ? 'k+' : ''}
                      {key === 'average rating' && <span className='text-yellow-400 ml-2'>★★★★★</span>}
                    </p>
                    <h2 className='uppercase text-center text-xl font-medium text-white'>{key}</h2>
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