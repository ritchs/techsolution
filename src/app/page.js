import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/app/ui/navbar/navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
