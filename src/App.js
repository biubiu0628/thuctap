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
import Request from "./pages/Request";
import History from "./pages/History";
import Rating from "./pages/Rating";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Register from "./components/Register";
import OTP from "./components/OTP";

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
          path="/request"
          element={
            <Layout>
              <Request />
            </Layout>
          }
        />
        <Route
          path="/history"
          element={
            <Layout>
              <History />
            </Layout>
          }
        />
        <Route
          path="/rating"
          element={
            <Layout>
              <Rating />
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
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
