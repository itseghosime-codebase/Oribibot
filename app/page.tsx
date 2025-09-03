import Banner from "@/components/Banner";
import BottomSection from "@/components/BottomSection";
import Solution from "@/components/Solution";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <Solution />
      <BottomSection />
    </main>
  );
}
