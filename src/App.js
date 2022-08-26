import logo from "./logo.svg";
import "./App.css";
import HeroPage from "./Components/HeroPage/HeroPage";
import { Route, Routes } from "react-router-dom";
import AddPatient from "./Components/AddPatient/AddPatient";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/forms" element={<AddPatient />} />
    </Routes>
  );
}

export default App;
