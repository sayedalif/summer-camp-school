import Analytics from "./Analytics";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Curriculum></Curriculum>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Analytics></Analytics>
    </div>
  );
};

export default HomePage;