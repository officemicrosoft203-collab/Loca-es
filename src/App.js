import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Páginas extras
import PageConsultarLoja from "./pages/PageConsultarLoja";  
import PageOrcamento from "./pages/PageOrcamento";

// ✅ Adicione esta linha aqui
import WhatsAppButton from "./components/WhatsAppButton";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductList />
            <Services />
            <AboutUs />
            <Contact />
          </>
        } />

        {/* Novas rotas para as páginas */}
        <Route path="/consultar-loja" element={<PageConsultarLoja />} />
        <Route path="/orcamento" element={<PageOrcamento />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

