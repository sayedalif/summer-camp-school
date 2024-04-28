import { useQuery } from "@tanstack/react-query";
const useBanner = () => {

  // made a silly mistake here.
  // i was trying to get the data in banner.jsx using {banners} variable. while here in data it was {banner} so changing the variable name to banners fixed the problem
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ['banners'],
    queryFn: async () => {
      const response = await fetch('bannerData.json');
      const data = await response.json();
      return data;
    },
    refetchOnWindowFocus:false,
  })
  return {
    banners,
    isLoading
  }
};

export default useBanner;