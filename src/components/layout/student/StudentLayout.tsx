import BannerComponent from "../../banner/BannerComponent";
import ContainerLayout from "../../container/ContainerLayout";

interface StudentLayoutProps {
  hasBanner: boolean;
  children: React.ReactNode;
  bannerTitle: string;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({
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

export default StudentLayout;
