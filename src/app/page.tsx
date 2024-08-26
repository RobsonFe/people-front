import Greetings from "@/app/home";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Greetings />
      <Footer />
    </>
  );
}
