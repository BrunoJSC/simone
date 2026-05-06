import { HeroSection } from "@/components/sections/hero";
import { StorySection } from "@/components/sections/story";
import { HighlightsSection } from "@/components/sections/highlights";
import { TimelineSection } from "@/components/sections/timeline";
import { AtelierDetailsSection } from "@/components/sections/atelier-details";
import { GallerySection } from "@/components/sections/gallery";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <StorySection />
      <TimelineSection />
      <AtelierDetailsSection />
      <GallerySection />
      <FooterSection />
    </>
  );
}
