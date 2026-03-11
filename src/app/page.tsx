import ActiveSectionTracker from "@/components/ActiveSectionTracker";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ActiveSectionTracker />
      <ProjectsSection />
    </>
  );
}
