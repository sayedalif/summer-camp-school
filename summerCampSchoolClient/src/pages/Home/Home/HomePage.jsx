import Container from "../../../components/Container";
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
      <Container>
        <Banner></Banner>
        <Curriculum></Curriculum>
        <PopularClasses></PopularClasses>
        <PopularInstructor></PopularInstructor>
        <Analytics></Analytics>
        <WhyLearnFromUs></WhyLearnFromUs>
        <StudentsReview></StudentsReview>
      </Container>
    </div>
  );
};

export default HomePage;