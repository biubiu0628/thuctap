import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home/index";
import Create from "./pages/CreateOrder/index";
import Order from "./pages/Order/index";
import Stat from "./pages/Stat/index";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[15%_85%] bg-[#F2F2F2]">
        <div>
          <Nav />
        </div>
        <div className="px-10 pt-6">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/order" element={<Order />} />
            <Route path="/stat" element={<Stat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
