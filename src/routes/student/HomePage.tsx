import BannerLayout from "../../components/layout/banner-layout/BannerLayout";

const HomePage = () => {
  return (
    <BannerLayout hasBanner={true} variant={"main"} bannerTitle={"Dobrodošli"}>
      <div>HomePage</div>
    </BannerLayout>
  );
};

export default HomePage;
