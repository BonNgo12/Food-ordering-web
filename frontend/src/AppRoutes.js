import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FoodPage from './pages/Food/FoodPage';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PaymentPage from './pages/Payment/PaymentPage';
import OrderTrackPage from './pages/OrderTrack/OrderTrackPage';
import ProfilePage from './pages/Profile/ProfilePage';
import OrdersPage from './pages/Orders/OrdersPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import AdminRoute from './Components/AdminRoute/AdminRoute';
import FoodsAdminPage from './pages/FoodsAdmin/FoodsAdminPage';
import FoodEditPage from './pages/FoodEdit/FoodEditPage';
import UsersPage from './pages/Users/UsersPage';
import UserEditPage from './pages/UsersEdit/UsersEditPage';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/tag/:tag" element={<HomePage />} />
        <Route path="/food/:id" element={<FoodPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              <CheckoutPage />
            </AuthRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <AuthRoute>
              <PaymentPage />
            </AuthRoute>
          }
        />
        <Route
          path="/track/:orderId"
          element={
            <AuthRoute>
              <OrderTrackPage />
            </AuthRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthRoute>
              <ProfilePage />
            </AuthRoute>
        }
        />
        <Route
          path="/orders/:filter?"
          element={
            <AuthRoute>
              <OrdersPage />
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <DashboardPage />
            </AuthRoute>
          }
        />
        <Route
          path="/admin/foods/:searchTerm?"
          element={
            <AdminRoute>
              <FoodsAdminPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/addFood"
          element={
            <AdminRoute>
              <FoodEditPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/editFood/:foodId"
          element={
            <AdminRoute>
              <FoodEditPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users/:searchTerm?"
          element={
            <AdminRoute>
              <UsersPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/editUser/:userId"
          element={
            <AdminRoute>
              <UserEditPage />
            </AdminRoute>
          }
        />
    </Routes>
  );
}
