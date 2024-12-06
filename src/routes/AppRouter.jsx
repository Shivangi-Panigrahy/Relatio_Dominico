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
import Repository from "../pages/Files/Repository/Repository";
import Archivio from "../pages/Files/Archivio/Archivio";
import SubImposte from "../pages/Amministrazione/Imposte/SubImposte";
import Reteizzazione from "../pages/Amministrazione/Imposte/Reteizzazione.jsx";
import ImposteAllegati from "../pages/Amministrazione/Imposte/ImposteAllegati.jsx";
import SubAsset from "../pages/Amministrazione/Asset/SubAsset.jsx";
import Configuratore from "../pages/Cataloghi/Configuratore/Configuratore";
import Listini from "../pages/Cataloghi/Listini/Listini";
import Servizi from "../pages/Cataloghi/Servizi/Servizi";
import SubListini from "../pages/Cataloghi/Listini/SubListini.jsx"
import Gruppi from "../pages/Cataloghi/Listini/Gruppi.jsx"
import SubServizi from "../pages/Cataloghi/Servizi/SubServizi.jsx";
import Scheda_servizio from "../pages/Cataloghi/Servizi/Scheda_servizio.jsx";
import Prodotti from "../pages/Cataloghi/Prodotti/Prodotti.jsx";
import SubProdotti from "../pages/Cataloghi/Prodotti/SubProdotti.jsx";
import Scheda_prodotto from "../pages/Cataloghi/Prodotti/Scheda_prodotto.jsx";
import Distinta_base from "../pages/Cataloghi/Prodotti/Distinta_base.jsx";
import Opzioni from "../pages/Cataloghi/Prodotti/Opzioni.jsx";
import Giacenze from "../pages/Cataloghi/Prodotti/Giacenze.jsx";
import ProdottiAllegati from "../pages/Cataloghi/Prodotti/Allegati.jsx"
import ConfiguratoreProdotti from "../pages/Cataloghi/Configuratore/Prodotti.jsx"
import ListiniProdotti from "../pages/Cataloghi/Listini/Prodotti.jsx"
import HrCalendario from "../pages/HR/Calendario/Calendario.jsx"
import Candidati from "../pages/HR/Candidati/Candidati.jsx";
import Candidato from "../pages/HR/Candidati/Candidato.jsx";
import BustaPage from "../pages/HR/BustePage/BustePage.jsx";
import Busta from "../pages/HR/BustePage/Busta.jsx";
import FeriePermisse from "../pages/HR/FeriePermisse/FeriePermisse.jsx";
import FeriePermisseEvento from "../pages/HR/FeriePermisse/FeriePermisseEvento.jsx";
import Colaboratory from "../pages/HR/Colaboratory/Colaboratory.jsx";
import SubColaboratory from "../pages/HR/Colaboratory/SubColaboratory.jsx";
import Turni from "../component/Turni/Turni.jsx";
import Progetti from "../component/Progetti/Progetti.jsx";
import Contratto from "../component/Contratto/Contratto.jsx";
import Configure from "../pages/Cataloghi/Configuratore/Configure.jsx";
import HrContatti from "../component/Contatti/HrContatti";
import HrQualificazione from "../component/Qualificazione/HrQualificazione.jsx";
import LeadAnagrafiche from "../pages/Anagrafiche/Lead/LeadAnagrafiche.jsx";
import SubLeadAnagrafiche from "../pages/Anagrafiche/Lead/subLead/SubLeadAnagrafiche.jsx";
import CandidatiAnagrafiche from "../pages/Anagrafiche/Candidati/CandidatiAnagrafiche.jsx";
import CandidatoAnagrafiche from "../pages/Anagrafiche/Candidati/CandidatoAnagrafiche.jsx";
import ColaboratoryAnagrafiche from "../pages/Anagrafiche/Colaboratory/ColaboratoryAnagrafiche.jsx";
import SubColaboratoryAnagrafiche from "../pages/Anagrafiche/Colaboratory/SubColaboratory.jsx";
import FornitoriAnagrafiche from "../pages/Anagrafiche/Fornitori/FornitoriAnagrafiche.jsx";
import DettaglioAnagrafiche from "../pages/Anagrafiche/Fornitori/Dettaglio/DettaglioAnagrafiche.jsx";
import ClientiAnagrafiche from "../pages/Anagrafiche/Clienti/ClientiAnagrafiche.jsx";
import DettaglioClientiAnagrafiche from "../pages/Anagrafiche/Clienti/Dettaglio/DettaglioClientiAnagrafiche.jsx";

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
        path="/amministrazione/documenti/fattura"
        element={
          <PublicRoute>
            <InvoicePage />
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
        path="/amministrazione/imposte/Reteizzazione"
        element={
          <PublicRoute>
            <SubImposte Component={Reteizzazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/imposte/Allegati"
        element={
          <PublicRoute>
            <SubImposte Component={Allegati} />
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
        path="/amministrazione/asset/Rate"
        element={
          <PublicRoute>
            <SubAsset Component={Reteizzazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/amministrazione/asset/Allegati"
        element={
          <PublicRoute>
            <SubAsset Component={Allegati} />
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
      <Route
        path="/file/repository"
        element={
          <PublicRoute>
            <Repository />
          </PublicRoute>
        }
      />
      <Route
        path="/file/archivio"
        element={
          <PublicRoute>
            <Archivio />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/servizi"
        element={
          <PublicRoute>
            <Servizi />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/servizi/Scheda"
        element={
          <PublicRoute>
            <SubServizi Component={Scheda_servizio} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/servizi/Allegati"
        element={
          <PublicRoute>
            <SubServizi Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti"
        element={
          <PublicRoute>
            <Prodotti />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti/Scheda"
        element={
          <PublicRoute>
            <SubProdotti Component={Scheda_prodotto} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti/Distinta"
        element={
          <PublicRoute>
            <SubProdotti Component={Distinta_base} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti/Opzioni"
        element={
          <PublicRoute>
            <SubProdotti Component={Opzioni} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti/Giacenze"
        element={
          <PublicRoute>
            <SubProdotti Component={Giacenze} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/prodotti/Allegati"
        element={
          <PublicRoute>
            <SubProdotti Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/configuratore/Configurazione"
        element={
          <PublicRoute>
            <Configuratore Component={Configure} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/configuratore/Prodotti"
        element={
          <PublicRoute>
            <Configuratore Component={ConfiguratoreProdotti} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/listini"
        element={
          <PublicRoute>
            <Listini />
          </PublicRoute>
        }
      />

      <Route
        path="/cataloghi/listini/Gruppi"
        element={
          <PublicRoute>
            <SubListini Component={Gruppi} />
          </PublicRoute>
        }
      />
      <Route
        path="/cataloghi/listini/Prodotti"
        element={
          <PublicRoute>
            <SubListini Component={ListiniProdotti} />
          </PublicRoute>
        }
      />


      <Route
        path="/hr/calendario"
        element={
          <PublicRoute>
            <HrCalendario />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/organizza"
        element={
          <PublicRoute>
            <HrCalendario />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/colaboratory"
        element={
          <PublicRoute>
            <Colaboratory />
          </PublicRoute>
        }
      />
      {/* <Route
        path="/hr/colaboratory/sub-colaboratory"
        element={
          <PublicRoute>
            <SubColaboratory Component={HrContatti} />
          </PublicRoute>
        }
      /> */}
      <Route
        path="/hr/sub-colaboratory/Contatti"
        element={
          <PublicRoute>
            <SubColaboratory Component={HrContatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Qualificazione"
        element={
          <PublicRoute>
            <SubColaboratory Component={HrQualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Documenti"
        element={
          <PublicRoute>
            <SubColaboratory Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Contratto"
        element={
          <PublicRoute>
            <SubColaboratory Component={Contratto} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Equipagiamento"
        element={
          <PublicRoute>
            <SubColaboratory Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Turni"
        element={
          <PublicRoute>
            <SubColaboratory Component={Turni} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Progetti"
        element={
          <PublicRoute>
            <SubColaboratory Component={Progetti} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Agenda"
        element={
          <PublicRoute>
            <SubColaboratory Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/sub-colaboratory/Allegati"
        element={
          <PublicRoute>
            <SubColaboratory Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/ferie-e-permisse"
        element={
          <PublicRoute>
            <FeriePermisse />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/ferie-e-permisse/evento"
        element={
          <PublicRoute>
            <FeriePermisseEvento Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/buste-page"
        element={
          <PublicRoute>
            <BustaPage />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/buste-page/busta"
        element={
          <PublicRoute>
            <Busta Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/candidati"
        element={
          <PublicRoute>
            <Candidati />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/candidati/candidato/Contatti"
        element={
          <PublicRoute>
            <Candidato Component={HrContatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/candidati/candidato/Qualificazione"
        element={
          <PublicRoute>
            <Candidato Component={HrQualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/candidati/candidato/Agenda"
        element={
          <PublicRoute>
            <Candidato Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/hr/candidati/candidato/Allegati"
        element={
          <PublicRoute>
            <Candidato Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/lead"
        element={
          <PublicRoute>
            <LeadAnagrafiche />
          </PublicRoute>
        }
      />
      <Route
        path="/anagrafiche/sub-lead/Contatti"
        element={
          <PublicRoute>
            <SubLeadAnagrafiche Component={Contatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/anagrafiche/sub-lead/Qualificazione"
        element={
          <PublicRoute>
            <SubLeadAnagrafiche Component={Qualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/anagrafiche/sub-lead/Documenti"
        element={
          <PublicRoute>
            <SubLeadAnagrafiche Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/anagrafiche/sub-lead/Agenda"
        element={
          <PublicRoute>
            <SubLeadAnagrafiche Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati"
        element={
          <PublicRoute>
            <CandidatiAnagrafiche />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati/Contatti"
        element={
          <PublicRoute>
            <CandidatoAnagrafiche Component={HrContatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati/Qualificazione"
        element={
          <PublicRoute>
            <CandidatoAnagrafiche Component={HrQualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati/Agenda"
        element={
          <PublicRoute>
            <CandidatoAnagrafiche Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati/Allegati"
        element={
          <PublicRoute>
            <CandidatoAnagrafiche Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/candidati/Allegati"
        element={
          <PublicRoute>
            <CandidatoAnagrafiche Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/colaboratory"
        element={
          <PublicRoute>
            <ColaboratoryAnagrafiche />
          </PublicRoute>
        } ColaboratoryAnagrafiche
      />
      <Route
        path="/angrafiche/sub-colaboratory/Contatti"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={HrContatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Qualificazione"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={HrQualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Documenti"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Contratto"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Contratto} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Equipagiamento"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Turni"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Turni} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Progetti"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Progetti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Agenda"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/sub-colaboratory/Allegati"
        element={
          <PublicRoute>
            <SubColaboratoryAnagrafiche Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori"
        element={
          <PublicRoute>
            <FornitoriAnagrafiche />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Contatti"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Contatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Qualificazione"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Qualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Documenti"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Agenda"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Dati"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Dati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Sedi"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Sedi} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Relazioni"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Relazioni} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/fornitori/Allegati"
        element={
          <PublicRoute>
            <DettaglioAnagrafiche Component={Allegati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti"
        element={
          <PublicRoute>
            <ClientiAnagrafiche />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Contatti"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Contatti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Qualificazione"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Qualificazione} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Documenti"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Documenti} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Agenda"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={ReactBigCalendar} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Dati"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Dati} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Sedi"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Sedi} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Relazioni"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Relazioni} />
          </PublicRoute>
        }
      />
      <Route
        path="/angrafiche/clienti/Allegati"
        element={
          <PublicRoute>
            <DettaglioClientiAnagrafiche Component={Allegati} />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Allroutes;
