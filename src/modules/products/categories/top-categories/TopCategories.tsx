import { Category } from "@/modules/common/interfaces/model/category.interface";
import { Title } from "@/modules/shared/components/ui/title/Title";
import { categoriesData } from "@/modules/shared/data/categories";
import { TopCategoriesSlider } from "./TopCategoriesSlider";

interface Props {
    categories: Category[];
}

const TopCategories = () => {
  return (
    <div className="my-container">
        <Title title="Compra en las" titleColor="mejores categorías" />
        <div className="h-[2rem]"></div>
        <TopCategoriesSlider categories={categoriesData} />
    </div>
  )
}

export default TopCategories;