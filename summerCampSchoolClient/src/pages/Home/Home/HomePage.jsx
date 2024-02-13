import Analytics from "./Analytics";
import Banner from "./Banner";
import Curriculum from "./Curriculum";
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import StudentsReview from "./StudentsReview";
import WhyLearnFromUs from "./WhyLearnFromUs";


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Curriculum></Curriculum>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Analytics></Analytics>
      <WhyLearnFromUs></WhyLearnFromUs>
      <StudentsReview></StudentsReview>
    </div>
  );
};

export default HomePage;