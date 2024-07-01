import BannerLayout from "../../components/layout/banner-layout/BannerLayout";

const HomePage = () => {
  return (
    <BannerLayout
      hasBanner={true}
      variant={"main"}
      bannerTitle={"Dobrodošli na Code school"}
    >
      <div>HomePage</div>
    </BannerLayout>
  );
};

export default HomePage;
