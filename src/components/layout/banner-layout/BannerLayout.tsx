import BannerComponent from "../../banner/BannerComponent";
import ContainerLayout from "../../container/ContainerLayout";

interface BannerLayoutProps {
  hasBanner: boolean;
  children: React.ReactNode;
  bannerTitle: string;
}

const BannerLayout: React.FC<BannerLayoutProps> = ({
  hasBanner,
  children,
  bannerTitle,
}) => {
  return (
    <>
      {hasBanner && <BannerComponent variant={"main"} title={bannerTitle} />}
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
};

export default BannerLayout;
