import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import DashBoard from "./pages/DashBoard"
import Teams from "./pages/Teams";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

const App = () => {
  return (
    <div className="grid grid-cols-[2fr_8fr]">
      <div>
        <SideBarMenu />
      </div>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;