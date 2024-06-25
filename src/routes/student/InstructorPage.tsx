import BannerLayout from "../../components/layout/banner-layout/BannerLayout";

const InstructorPage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"secondary"}
      bannerTitle={"Predavači"}
    >
      <div>Predavači</div>
    </BannerLayout>
  );
};

export default InstructorPage;
