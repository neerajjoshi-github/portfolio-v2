import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1080px]">
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default Home;
