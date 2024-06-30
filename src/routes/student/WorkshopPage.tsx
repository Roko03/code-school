import BannerLayout from "../../components/layout/banner-layout/BannerLayout";
import StudentWorkshopPageSection from "../../pages/student-workshop-page/StudentWorkshopPageSection";

const WorkshopPage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"secondary"}
      bannerTitle={"Radionice"}
    >
      <StudentWorkshopPageSection />
    </BannerLayout>
  );
};

export default WorkshopPage;
