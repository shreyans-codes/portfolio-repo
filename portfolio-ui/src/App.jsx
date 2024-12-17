import "./App.css";
import CommonNavbar from "./components/CommonNavbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <CommonNavbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<div />} />
        <Route path="/settings" element={<div />} />
        <Route path="/create-project/:projectId" element={<div />} />
        <Route path="/project/:projectId/details" element={<div />} />
        <Route path="/application/:applicationId" element={<div />} />
        {/* <Route path="/web-audit/:issueId" element={<div />} /> */}
        <Route path="/audit/issues/:issueId/details" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
