import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GroupPage from "./pages/GroupPage";
import ResearchPage from "./pages/ResearchPage";
import GrantsPage from "./pages/GrantsPage";
import TalksPage from "./pages/TalksPage";
import TeachingPage from "./pages/TeachingPage";
import ContactPage from "./pages/ContactPage";
import MiscPage from "./pages/MiscPage";
import "./styles.css";

const ROUTES = {
  "/": HomePage,
  "/group": GroupPage,
  "/research": ResearchPage,
  "/grants": GrantsPage,
  "/talks": TalksPage,
  "/teaching": TeachingPage,
  "/contact": ContactPage,
  "/misc": MiscPage,
};

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.replace("#", "") || "/"
  );

  useEffect(() => {
    const onHashChange = () => {
      const path = window.location.hash.replace("#", "") || "/";
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
    setCurrentPath(path);
  };

  const PageComponent = ROUTES[currentPath] || HomePage;

  return (
    <div className="app">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="main-content">
        <PageComponent navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
