import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Services from "./components/Services";
import About from "./components/About";
import Inquiry from "./components/Inquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminFoods from "./admin/AdminFoods";
import AdminQueries from "./admin/AdminQueries";

function Home() {
  return (
    <div className="min-h-screen bg-[#fffcf8]">
      <Navbar />

      <main>
        <Hero />
        <Menu />
        <Services />
        <About />
        <Inquiry />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}

        <Route path="/" element={<Home />} />

        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* ================= PROTECTED ADMIN AREA ================= */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/foods"
            element={<AdminFoods />}
          />
            <Route
    path="/admin/queries"
    element={<AdminQueries />}
  />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;