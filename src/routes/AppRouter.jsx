// Allroutes.js
import React from "react";
import Dashboard from "../pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "../auth/PublicRoute";
import DashboardForm from "../pages/dashboardForm/DashboardForm";
import DashboardForm2 from "../pages/dashboardForm2/DashboardForm";
import AuthLayout from "../pages/auth/loginForm/AuthLayout";
import Forgot_Password from "../pages/auth/loginForm/Forgot_Password";
import Password_Reset from "../pages/auth/loginForm/Password_Reset";
import Password_Success from "../pages/auth/loginForm/Password_Success";
import LoginForm from "../pages/auth/loginForm/LoginForm";
import VerificationPage from "../pages/auth/loginForm/verificationPage";
import MailVerificationPage from "../pages/auth/loginForm/mailVerificationPage";
import InvoicePage from "../pages/InvoicePage/Invoicepage";
import ProfiittiDashboard from "../pages/ProfiittiDashboard/ProfiittiDashboard";
import Calendario from "../pages/calendario/Calendario";
import Gantt from "../pages/gantt/Gantt";
import GanttLib from "../pages/gantt/GanttLib";
import Profitti from "../pages/dashboard/Profitti";
import Acquisti from "../pages/dashboard/Acquisti";
import Asset from "../pages/dashboard/Asset";
import Imposte from "../pages/dashboard/Imposte";
import Produzione from "../pages/dashboard/Produzione";
import Vendite from "../pages/dashboard/Vendite";

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <AuthLayout Component={LoginForm} />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <AuthLayout Component={Forgot_Password} />
          </PublicRoute>
        }
      />
      <Route
        path="/password-reset"
        element={
          <PublicRoute>
            <AuthLayout Component={Password_Reset} />
          </PublicRoute>
        }
      />
      <Route
        path="/password-success"
        element={
          <PublicRoute>
            <AuthLayout Component={Password_Success} />
          </PublicRoute>
        }
      />
      <Route
        path="/verification"
        element={
          <PublicRoute>
            <AuthLayout Component={VerificationPage} />
          </PublicRoute>
        }
      />
      <Route
        path="/mail-verification"
        element={
          <PublicRoute>
            <AuthLayout Component={MailVerificationPage} />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PublicRoute>
            <Dashboard />
          </PublicRoute>
        }
      />
      <Route
        path="/form"
        element={
          <PublicRoute>
            <DashboardForm />
          </PublicRoute>
        }
      />
      <Route
        path="/form2"
        element={
          <PublicRoute>
            <DashboardForm2 />
          </PublicRoute>
        }
      />
      <Route
        path="/invoice/fattura"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/invoice/preventivo"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/statsDashboard"
        element={
          <PublicRoute>
            <ProfiittiDashboard />
          </PublicRoute>
        }
      />
      <Route
        path="/calendar"
        element={
          <PublicRoute>
            <Calendario />
          </PublicRoute>
        }
      />
      <Route
        path="/gantt"
        element={
          <PublicRoute>
            <Gantt />
          </PublicRoute>
        }
      />
      <Route
        path="/gantt/library"
        element={
          <PublicRoute>
            <GanttLib />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/profitti"
        element={
          <PublicRoute>
            <Profitti />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/acquisti"
        element={
          <PublicRoute>
            <Acquisti />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/asset"
        element={
          <PublicRoute>
            <Asset />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/imposte"
        element={
          <PublicRoute>
            <Imposte />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/produzione"
        element={
          <PublicRoute>
            <Produzione />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/profitti"
        element={
          <PublicRoute>
            <Profitti />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard/vendite"
        element={
          <PublicRoute>
            <Vendite />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Allroutes;
