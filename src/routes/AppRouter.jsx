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
import Contatti from "../component/Contatti/Contatti";
import Relazioni from "../component/table/Relazioni/Relazioni";
import VenditePreventivi from "../pages/Vendite/Preventivi/Preventivi";
import AcquisitiPreventivi from "../pages/Acquisti/Preventivi/Preventivi";
import VenditeOrdini from "../pages/Vendite/Ordini/Ordini";
import AcquisitiOrdini from "../pages/Acquisti/Ordini/Ordini";
import VenditeBudget from "../pages/Vendite/Budget/Budget";
import AcquisitiBudget from "../pages/Acquisti/Budget/Budget";
import Lead from "../pages/Vendite/Lead/Lead";
import SubLead from "../pages/Vendite/Lead/SubLead/SubLead";
import Qualificazione from "../component/Qualificazione/Qualificazione";
import Fornitori from "../pages/Acquisti/Fornitori/Fornitori";
import ReactBigCalendar from "../component/calendar/Calendar";
import Allegati from "../component/table/Allegati/Allegati";
import Dati from "../component/Dati/Dati";
import Sedi from "../component/Sedi/Sedi";
import Documenti from "../component/Documenti/Documenti";
import VenditeCalendario from "../pages/Vendite/calendario/Calendario";
import AcquistiCalendario from "../pages/Acquisti/Calendario/Calendario";
import Dettaglio from "../pages/Acquisti/Fornitori/Dettaglio/Dettaglio";
import Personale from "../pages/dashboard/Personale";
import Attivita from "../pages/dashboard/Attivita";
import AmministrazioneDocumenti from "../pages/Amministrazione/Documenti/Documenti";
import AmministrazioneImposte from "../pages/Amministrazione/Imposte/Imposte";
import AmministrazioneAsset from "../pages/Amministrazione/Asset/Asset";
import AmministrazioneBilancio from "../pages/Amministrazione/Bilancio/Bilancio";
import AmministrazioneScadenzario from "../pages/Amministrazione/Scadenzario/Scadenzario";
import Flussi_di_cassa from "../pages/Amministrazione/Flussi_di_cassa/Flussi_di_cassa";
import Registri_IVA from "../pages/Amministrazione/Registri_IVA/Registri_IVA";
import Prima_nota from "../pages/Amministrazione/Prima_nota/Prima_nota";

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
        path="/dashboard/vendite"
        element={
          <PublicRoute>
            <Vendite />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/personale"
        element={
          <PublicRoute>
            <Personale />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard/attivita"
        element={
          <PublicRoute>
            <Attivita />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/calendario"
        element={
          <PublicRoute>
            <AcquistiCalendario />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori"
        element={
          <PublicRoute>
            <Fornitori />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Contatti"
        element={
          <PublicRoute>
            <Dettaglio Component={Contatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Qualificazione"
        element={
          <PublicRoute>
            <Dettaglio Component={Qualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Documenti"
        element={
          <PublicRoute>
            <Dettaglio Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Agenda"
        element={
          <PublicRoute>
            <Dettaglio Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Dati"
        element={
          <PublicRoute>
            <Dettaglio Component={Dati} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Sedi"
        element={
          <PublicRoute>
            <Dettaglio Component={Sedi} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Relazioni"
        element={
          <PublicRoute>
            <Dettaglio Component={Relazioni} />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/fornitori/Allegati"
        element={
          <PublicRoute>
            <Dettaglio Component={Allegati} />
          </PublicRoute>
        }
      />

      <Route
        path="/acquisti/preventivi"
        element={
          <PublicRoute>
            <AcquisitiPreventivi />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/preventivi/sub-preventivi"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/ordini"
        element={
          <PublicRoute>
            <AcquisitiOrdini />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/ordini/sub-ordini"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/budget/sub-budget"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/acquisti/budget"
        element={
          <PublicRoute>
            <AcquisitiBudget />
          </PublicRoute>
        }
      />
      <Route
        path="/example"
        element={
          <PublicRoute>
            <Relazioni />
          </PublicRoute>
        }
      />
      {/* Newly added routes */}
      <Route
        path="/vendite/preventivi"
        element={
          <PublicRoute>
            <VenditePreventivi />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/calendario"
        element={
          <PublicRoute>
            <VenditeCalendario />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/ordini"
        element={
          <PublicRoute>
            <VenditeOrdini />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/budget"
        element={
          <PublicRoute>
            <VenditeBudget />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/lead"
        element={
          <PublicRoute>
            <Lead />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/sub-lead/Contatti"
        element={
          <PublicRoute>
            <SubLead Component={Contatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/sub-lead/Qualificazione"
        element={
          <PublicRoute>
            <SubLead Component={Qualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/sub-lead/Documenti"
        element={
          <PublicRoute>
            <SubLead Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/sub-lead/Agenda"
        element={
          <PublicRoute>
            <SubLead Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/preventivi/sub-preventivi"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/ordini/sub-ordini"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      <Route
        path="/vendite/budget/sub-budget"
        element={
          <PublicRoute>
            <InvoicePage />
          </PublicRoute>
        }
      />
      {/* amministrazione Route start */}
      <Route
        path="/amministrazione/documenti"
        element={
          <PublicRoute>
            <AmministrazioneDocumenti />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/imposte"
        element={
          <PublicRoute>
            <AmministrazioneImposte />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/asset"
        element={
          <PublicRoute>
            <AmministrazioneAsset />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/bilancio"
        element={
          <PublicRoute>
            <AmministrazioneBilancio />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/scadenzario"
        element={
          <PublicRoute>
            <AmministrazioneScadenzario />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/flussi-di-cassa"
        element={
          <PublicRoute>
            <Flussi_di_cassa />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/registri-iva"
        element={
          <PublicRoute>
            <Registri_IVA />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/prima-nota"
        element={
          <PublicRoute>
            <Prima_nota />
          </PublicRoute>
        }
      />
      {/* amministrazione Route end */}
    </Routes>
  );
};

export default Allroutes;