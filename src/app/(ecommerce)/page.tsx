import OurBenefits from "@/modules/common/components/ui/sections/benefits/OurBenefits";
import FeaturedSpaces from "@/modules/common/components/ui/sections/featured/FeaturedSpaces";
import HeroSlider from "@/modules/common/components/ui/slider/hero/HeroSlider";
import { getCategories } from "@/modules/products/categories/actions/get-categories";
import TopCategories from "@/modules/products/categories/components/top-categories/TopCategories";
import ProductsSlider from "@/modules/products/components/slider/ProductsSlider";


export default async function HomePage() {

  const categories = await getCategories(); 

  return (
    <div className="bg-stale-50">
        <HeroSlider/>
        <ProductsSlider/>

        {/* Spacing */}
        <div className="h-[5rem]"></div>

        <TopCategories categories={categories.data!}/>

        <div className="h-[5rem]"></div>
        
        <FeaturedSpaces/>

        <div className="h-[5rem]"></div>
        
        <OurBenefits/>

        <div className="h-[5rem]"></div>
    </div>
  )
}
