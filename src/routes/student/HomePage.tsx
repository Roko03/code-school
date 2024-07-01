import BannerLayout from "../../components/layout/banner-layout/BannerLayout";
import StudentMainPageSection from "../../pages/student-main-page/StudentMainPageSection";

const HomePage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"main"}
      bannerTitle={"Dobrodošli na Code school"}
    >
      <StudentMainPageSection />
    </BannerLayout>
  );
};

export default HomePage;
