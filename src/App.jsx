import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebPage from "./pages/WebPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
