import Footer from "./components/footer-components/Footer";
import Header from "./components/header-components/Header";
import Quiz from "./components/quzi-components/Quiz";
import "./globals.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="mainContent">
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}