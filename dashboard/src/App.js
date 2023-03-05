import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/products" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
          <Route path="/category" element={<PrivateRoute><CategoriesPage /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><OrderPage /></PrivateRoute>} />
          <Route path="/order/:id" element={<PrivateRoute><OrderDetailPage /></PrivateRoute>} />
          <Route path="/addproduct" element={<PrivateRoute><AddProductPage /></PrivateRoute>} />
          <Route path="/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} />
          <Route path="/product/:id/edit" element={<PrivateRoute><ProductEditPage /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<PrivateRoute><NotFound /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
