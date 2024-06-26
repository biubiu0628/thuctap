import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Create from "./pages/CreateOrder/index";
import Order from "./pages/Order/index";
import Stat from "./pages/Stat/index";
import Account from "./pages/Account/index";
import Layout from "./components/Layout";
import LayoutAccount from "./components/LayoutAccount";
import Warehouse from "./pages/Warehouse/index";
import Bank from "./pages/Bank/index";
import Product from "./pages/Product/index";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/create"
          element={
            <Layout>
              <Create />
            </Layout>
          }
        />
        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />
        <Route
          path="/stat"
          element={
            <Layout>
              <Stat />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <LayoutAccount>
              <Account />
            </LayoutAccount>
          }
        />
        <Route
          path="/warehouse"
          element={
            <LayoutAccount>
              <Warehouse />
            </LayoutAccount>
          }
        />
        <Route
          path="/bank"
          element={
            <LayoutAccount>
              <Bank />
            </LayoutAccount>
          }
        />
        <Route
          path="/product"
          element={
            <LayoutAccount>
              <Product />
            </LayoutAccount>
          }
        />
        <Route
          path="/createPro"
          element={
            <LayoutAccount>
              <CreateProduct />
            </LayoutAccount>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
