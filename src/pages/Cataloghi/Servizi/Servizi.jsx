import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziCataloghiData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./Servizi.scss";

const columns = [
  { field: "cod", headerName: "COD.", width: 188 },
  { field: "nomeServizio", headerName: "Nome del servizio", width: 330 },
  { field: "categoria", headerName: "Categoria", width: 223 },
  { field: "um", headerName: "UM", width: 80 },
  { field: "pzVendita", headerName: "Pz di vendita", width: 125 },
  { field: "costoServizio", headerName: "Costo servizio", width: 130 },
  { field: "ricavoUnitario", headerName: "Ricavo U.", width: 100 },
  { field: "acquistato", headerName: "Acquistato", width: 130 },
  { field: "venduto", headerName: "Venduto", width: 130 },
  { field: "ricavoTotale", headerName: "Ricavo tot", width: 130 },
  { field: "utente", headerName: "Utente", width: 85 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];


const serviziData = [
  {
    status: "Servizi ",
    count: "",
    amount: "20234",
    color: "#100919",
    iconColor: "",
  },
  {
    status: "Finanziario",
    count: 325,
    amount: "20.350.043.55€",
    color: "#160A2A",
    iconColor: "#57C700",
  },
  {
    status: "Immobiliare",
    count: 325,
    amount: "20.350.043.55€",
    color: "#160A2A",
    iconColor: "#57C700",
  },
  {
    status: "Strumentale",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
    iconColor: "#DB0000",
  },
];

const Servizi = () => {
  return (
    <>
      <Header />

      <div className="pageTemplate">
        <div className="cat_servizi">
          <InvoiceDashboard servizi={serviziData} />
        </div>
        <Table data={tableData} columns={columns} navData={"servizi"} />
      </div>
    </>
  );
};

export default Servizi;
