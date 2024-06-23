import StudentLayout from "../../components/layout/student/StudentLayout";

const HomePage = () => {
  return (
    <StudentLayout hasBanner={true} bannerTitle={"Naslovna"}>
      <div>HomePage</div>
    </StudentLayout>
  );
};

export default HomePage;
