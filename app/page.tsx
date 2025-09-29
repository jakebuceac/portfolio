import Profile from "@/app/ui/profile";
import Tech from "@/app/ui/tech";

export default function Home() {
  return (
      <main>
        <div className="space-y-20">
          <div className="p-4 fade-down">
            <Profile />
          </div>
          <div className="p-4" >
            <Tech />
          </div>
        </div>
      </main>
  );
}
