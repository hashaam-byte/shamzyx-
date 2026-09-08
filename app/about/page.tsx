import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import StackSection from "@/components/StackSection";

export const revalidate = 60;

export default function AboutPage() {
  return (
    <main>
      <AboutIntro />
      <AboutStory />
      <StackSection />
    </main>
  );
}
