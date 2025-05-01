import HeroSlider from "@/modules/shared/components/ui/slider/hero/HeroSlider";
import FeaturedSpaces from "@/modules/shared/components/ui/sections/featured/FeaturedSpaces";
import OurBenefits from "@/modules/shared/components/ui/sections/benefits/OurBenefits";

export default function HomePage() {
  return (
    <div className="bg-stale-50">
        <HeroSlider/>
        // products slider

        {/* Spacing */}
        <div className="h-[5rem]"></div>

        // top categories

        <div className="h-[5rem]"></div>
        <FeaturedSpaces/>
        // features spaces

        <div className="h-[5rem]"></div>
        <OurBenefits/>
        // our benefits

        <div className="h-[5rem]"></div>
    </div>
  )
}
