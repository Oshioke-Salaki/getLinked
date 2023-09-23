import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebPage from "./pages/WebPage";
import ContactPage from "./pages/ContactPage";

function Router() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WebPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>;
}

export default Router;
