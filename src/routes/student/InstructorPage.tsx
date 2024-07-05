import BannerLayout from "../../components/layout/banner-layout/BannerLayout";
import StudentInstructorPageSection from "../../pages/student-instructor-page/StudentInstructorPageSection";

const InstructorPage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"secondary"}
      bannerTitle={"Predavači"}
    >
      <StudentInstructorPageSection />
    </BannerLayout>
  );
};

export default InstructorPage;
