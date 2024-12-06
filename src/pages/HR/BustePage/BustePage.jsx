import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/bustaHrData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./BustePage.scss";
import { useLocation } from "react-router-dom";
const columns = [
  { field: "numero", headerName: "Numero", width: 100 },
  { field: "mese", headerName: "Mese", width: 100 },
  { field: "creatoil", headerName: "Data", width: 100 },
  { field: "collaboratore", headerName: "Collaboratore", width: 720 },
  { field: "totale", headerName: "Totale", width: 160 },
  { field: "daSaldare", headerName: "Da saldare", width: 160 },
  { field: "saldo", headerName: "Saldato", width: 160 },
  { field: "autore", headerName: "Autore", width: 85 },
  { field: "modDa", headerName: "Mod. da", width: 85 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];

const OrdiniData = [
  {
    status: "Totale buste paga",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#57C700",
  },
  {
    status: "Ultimo mese",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#57C700",
  },
  {
    status: "Ultimo anno",
    count: 325,
    amount: "20.350.043.55€",
    subfix: "Buste paga",
    color: "#57C700",
  },
];
const BustaPage = () => {
  const location = useLocation();

  const isSubcolaboratoryDocumenti =
    location.pathname === "/hr/sub-colaboratory/Documenti";

  const isAnagraficheCollaboratoriDocumentiPage =
    location.pathname === "/angrafiche/sub-colaboratory/Documenti"
  return (
    <>
      {!isSubcolaboratoryDocumenti && !isAnagraficheCollaboratoriDocumentiPage && <Header />}

      <div className="pageTemplate">
        <div className="buste">
          {!isSubcolaboratoryDocumenti && !isAnagraficheCollaboratoriDocumentiPage && (
            <InvoiceDashboard
              ordini={OrdiniData}
              hr={true}
              reteizzazione={true}
            />
          )}

          <Table data={tableData} columns={columns} navData={"busta"} />
        </div>
      </div>
    </>
  );
};

export default BustaPage;
