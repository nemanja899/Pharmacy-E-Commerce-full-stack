import logo from "./logo.svg";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToasify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoriesPage from "./pages/CategoriesPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import AddProductPage from "./pages/AddProduct";
import UsersPage from "./pages/UsersPage";
import ProductEditPage from "./pages/ProductEdditPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category" element={<CategoriesPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/order" element={<OrderDetailPage />} />
          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/product/:id/edit" element={<ProductEditPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
