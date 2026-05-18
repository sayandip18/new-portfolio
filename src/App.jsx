import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#09090b" }}>
      <Header />
      <main>
        <Hero />
        <Resume />
        <Experience />
        <SideProjects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
