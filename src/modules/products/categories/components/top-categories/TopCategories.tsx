import { Category } from "@/modules/products/categories/model/category.interface";
import { TopCategoriesSlider } from "./TopCategoriesSlider";
import { Title } from "@/modules/common/components/ui/title/Title";

interface Props {
  categories: Category[];
}

const TopCategories = ({ categories } : Props) => {
  return (
    <div className="my-container">
      <Title title="Compra en las" titleColor="mejores categorías" />
      <div className="h-[2rem]"></div>
      <TopCategoriesSlider categories={categories} />
    </div>
  );
};

export default TopCategories;
