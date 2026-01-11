import Categories from "@/components/home/categories";
import HeroSection from "@/components/home/hero-section";

const Home = () => {
  return (
    <div className="min-h-screen bg-app-bg ">
      <section className="pb-8 ">
        <HeroSection />
      </section>

      <section className="pb-8 w-full items-center border-b border-b-gray-line/40">
        <Categories />
      </section>
    </div>
  );
};

export default Home;
