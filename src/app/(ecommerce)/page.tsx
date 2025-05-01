import TopCategories from "@/modules/products/categories/top-categories/TopCategories";
import HeroSlider from "@/modules/shared/components/ui/slider/hero/HeroSlider";

export default function HomePage() {
  return (
    <div className="bg-stale-50">
        <HeroSlider/>
        // products slider

        {/* Spacing */}
        <div className="h-[5rem]"></div>

        <TopCategories/>

        <div className="h-[5rem]"></div>

        // features spaces

        <div className="h-[5rem]"></div>

        // our benefits

        <div className="h-[5rem]"></div>
    </div>
  )
}
