import Navbar from "@/app/ui/navbar/navbar";
import Sectionone from "@/app/ui/main/sectionOne";
import Sectiontwo from "@/app/ui/main/sectionTwo";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Sectionone />
        <Sectiontwo />
      </main>
      <footer></footer>
    </div>
  );
}
