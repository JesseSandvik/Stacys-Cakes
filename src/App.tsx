import { Routes, Route } from "react-router-dom";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";

import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
