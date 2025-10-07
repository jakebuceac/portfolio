import Profile from "@/app/ui/profile";
import Tech from "@/app/ui/tech";
import FeaturedProjects from "@/app/ui/featured-projects";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20">
      <div className="space-y-10">
        <section id="home" className="scroll-mt-16 md:scroll-mt-20 min-h-screen p-4 fade-down">
          <Profile />
        </section>
        <section id="tech"className="scroll-mt-16 md:scroll-mt-20 min-h-screen p-4">
          <Tech />
        </section>
        <section id="projects" className="scroll-mt-16 md:scroll-mt-20 min-h-screen p-4">
          <FeaturedProjects />
        </section>
      </div>
    </main>
  );
}
