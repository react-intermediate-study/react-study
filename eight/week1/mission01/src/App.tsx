import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./pages/HomePage/HomeContainer";
import SRPPage from "./pages/patternDetailPage/SRPPage";
import ContainerPage from "./pages/patternDetailPage/ContainerPage";
import CompoundPage from "./pages/patternDetailPage/CompoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />

      <Route path="/srp" element={<SRPPage />} />
      <Route path="/container" element={<ContainerPage />} />
      <Route path="/compound" element={<CompoundPage />} />
    </Routes>
  );
}

export default App;
