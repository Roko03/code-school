import BannerLayout from "../../components/layout/banner-layout/BannerLayout";

const HomePage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"secondary"}
      bannerTitle={"Naslovna"}
    >
      <div>HomePage</div>
    </BannerLayout>
  );
};

export default HomePage;
