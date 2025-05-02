import OurBenefits from "@/modules/common/components/ui/sections/benefits/OurBenefits";
import FeaturedSpaces from "@/modules/common/components/ui/sections/featured/FeaturedSpaces";
import HeroSlider from "@/modules/common/components/ui/slider/hero/HeroSlider";
import TopCategories from "@/modules/products/categories/top-categories/TopCategories";
import ProductsSlider from "@/modules/products/slider/ProductsSlider";


export default function HomePage() {
  return (
    <div className="bg-stale-50">
        <HeroSlider/>
        <ProductsSlider/>

        {/* Spacing */}
        <div className="h-[5rem]"></div>

        <TopCategories/>

        <div className="h-[5rem]"></div>
        <FeaturedSpaces/>

        <div className="h-[5rem]"></div>
        <OurBenefits/>

        <div className="h-[5rem]"></div>
    </div>
  )
}
