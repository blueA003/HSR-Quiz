import Footer from "./components/footer-components/Footer";
import Header from "./components/header-components/Header";
import Quiz from "./components/quzi-components/Quiz";
import "./globals.css";

export default function home() {
  return (
    <div>
      <Header/>
      <Quiz/>
      <Footer/>
    </div>
  );
}
