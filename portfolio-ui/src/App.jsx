import "./App.css";
import CommonNavbar, { navbarItemIds } from "./components/CommonNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <CommonNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path={`/${navbarItemIds.contact}`} element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
