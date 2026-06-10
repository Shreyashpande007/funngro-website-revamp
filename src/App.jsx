import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Company from "./pages/Company";
import Teen from "./pages/Teen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/company" replace />} />
        <Route path="/company" element={<Company />} />
        <Route path="/teen" element={<Teen />} />
        <Route path="*" element={<Navigate to="/company" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
