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
import Active from "./pages/Active";
import Doisoat from "./pages/Doisoat";
import Dongtien from "./pages/Doisoat/Dongtien";
import Chitiet from "./pages/Doisoat/Chitiet";
import Config from "./pages/Config";

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
          path="/doisoat"
          element={
            <Layout>
              <Doisoat />
            </Layout>
          }
        />
        <Route
          path="/doisoat/dongtien"
          element={
            <Layout>
              <Dongtien />
            </Layout>
          }
        />
        <Route
          path="/doisoat/chitiet"
          element={
            <Layout>
              <Chitiet />
            </Layout>
          }
        />
        <Route
          path="/config"
          element={
            <Layout>
              <Config />
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
        <Route
          path="/active"
          element={
            <LayoutAccount>
              <Active />
            </LayoutAccount>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
