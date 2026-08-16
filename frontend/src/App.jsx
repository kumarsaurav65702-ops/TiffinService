import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="min-h-screen bg-[#fffcf8]">
      <Navbar />

      <main>
        <Hero />
        <Menu />

        <section id="services" className="h-20" />
        <section id="about" className="h-20" />
        <section id="contact" className="h-20" />
        <section id="inquiry" className="h-20" />
      </main>
    </div>
  );
}

export default App;