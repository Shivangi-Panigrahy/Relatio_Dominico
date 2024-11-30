import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/prodottiCataloghiData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./Prodotti.scss";

const columns = [
  { field: "img", headerName: "IMG", width: 64 },
  { field: "cod", headerName: "COD.", width: 185 },
  { field: "nomeProdotto", headerName: "Nome del prodotto", width: 295 },
  { field: "categoria", headerName: "Categoria", width: 200 },
  { field: "um", headerName: "UM", width: 80 },
  { field: "pzVendita", headerName: "Pz di vendita", width: 125 },
  { field: "costoServizio", headerName: "Costo servizio", width: 130 },
  { field: "ricavoU", headerName: "Ricavo U.", width: 100 },
  { field: "acquistato", headerName: "Acquistato", width: 130 },
  { field: "venduto", headerName: "Venduto", width: 130 },
  { field: "ricavoTot", headerName: "Ricavo tot", width: 130 },
  { field: "utente", headerName: "Utente", width: 85 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];

  

const prodottiData = [
  {
    status: "Prodotti ",
    count: "",
    amount: "20234",
    color: "#100919",
    iconColor: "",
  },
  {
    status: "Acuistato",
    count: 325,
    amount: "20.350.043.55€",
    color: "#160A2A",
    iconColor: "#57C700",
  },
  {
    status: "Venduto",
    count: 325,
    amount: "20.350.043.55€",
    color: "#160A2A",
    iconColor: "#57C700",
  },
  {
    status: "Ricavo",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
    iconColor: "#57C700",
  },
];

const Prodotti = () => {
  return (
    <>
      <Header />

      <div className="pageTemplate">
        <InvoiceDashboard servizi={prodottiData} />

        <Table
          data={tableData}
          columns={columns}
          navData={"prodotti"}
        />
      </div>
    </>
  );
};

export default Prodotti;
