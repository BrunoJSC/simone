// import { AtelierDetailsSection } from "@/components/sections/atelier-details";
import { BazarSection } from "@/components/sections/bazar";
import { EpilogueSection } from "@/components/sections/epilogue";
import { FooterSection } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { HighlightsSection } from "@/components/sections/highlights";
import { StorySection } from "@/components/sections/story";
import { TimelineSection } from "@/components/sections/timeline";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <BazarSection />
      <EpilogueSection />
      <HighlightsSection />
      <TimelineSection />
      {/* <AtelierDetailsSection /> */}
      <GallerySection />
      <FooterSection />
    </>
  );
}
