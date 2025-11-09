import ComputerSection from "../section-card/computers-section";
import MobilesSection from "../section-card/mobiles-section";
import ManClothesSection from "../section-card/man-clothes-section";
import WomenClothesSection from "../section-card/women-clothes-section";

const Category = () => {
  return (
    <div>
      <div className="flex justify-around items-center bg-blue-950 px-7 py-5 mb-4">
        <h2 className="font-bold text-2xl text-white">CATEGORY</h2>
      </div>

      <MobilesSection />
      <ComputerSection />
      <ManClothesSection />
      <WomenClothesSection />
    </div>
  );
};

export default Category;
