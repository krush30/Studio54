import UpperBody from "./components/UpperBody";
import MiddleBody from "./components/MiddleBody";
import Header from "./components/Header";
import LowerBody from "./components/LowerBody";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1F1F1F]">
      <Header />
      <UpperBody />
      <MiddleBody />
      <LowerBody />
      <Footer />
    </div>
  );
}
