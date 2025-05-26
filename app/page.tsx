"use client";

import Footer from "./components/footer-components/Footer";
import Header from "./components/header-components/Header";
import Quiz from "./components/quzi-components/Quiz";
import "./globals.css";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pageContainer">
      <Suspense>
        <Header />
      </Suspense>
      <div className="mainContent">
        <Suspense>
          <Quiz />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
