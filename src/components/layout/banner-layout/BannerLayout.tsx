import BannerComponent from "../../banner/BannerComponent";
import ContainerLayout from "../../container/ContainerLayout";

interface BannerLayoutProps {
  hasBanner: boolean;
  variant?: "main" | "secondary";
  children: React.ReactNode;
  bannerTitle: string;
}

const BannerLayout: React.FC<BannerLayoutProps> = ({
  hasBanner,
  variant,
  children,
  bannerTitle,
}) => {
  return (
    <>
      {hasBanner && (
        <BannerComponent
          variant={variant ? variant : "main"}
          title={bannerTitle}
        />
      )}
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
};

export default BannerLayout;
