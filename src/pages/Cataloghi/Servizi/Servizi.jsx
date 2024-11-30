import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./Servizi.scss";

const columns = [
  { field: "cod", headerName: "COD.", width: 150 },
  { field: "nomeServizio", headerName: "Nome del servizio", width: 200 },
  { field: "categoria", headerName: "Categoria", width: 150 },
  { field: "um", headerName: "UM", width: 100 },
  { field: "pzVendita", headerName: "Pz di vendita", width: 150 },
  { field: "costoServizio", headerName: "Costo servizio", width: 150 },
  { field: "ricavoUnitario", headerName: "Ricavo U.", width: 150 },
  { field: "acquistato", headerName: "Acquistato", width: 150 },
  { field: "venduto", headerName: "Venduto", width: 150 },
  { field: "ricavoTotale", headerName: "Ricavo tot", width: 150 },
  { field: "utente", headerName: "Utente", width: 100 },
  { field: "azioni", headerName: "Azioni", width: 100 },
];
const rows = [
  {
    id: 1,
    cod: "MKR32-245-234-0",
    nomeServizio: "Nome del servizio",
    categoria: "Marketing",
    um: "Ore",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoUnitario: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTotale: "129.123.334,00€",
    utente: "User Image 1",
    azioni: "...",
  },
  {
    id: 2,
    cod: "MKR32-245-234-0",
    nomeServizio: "Nome del servizio",
    categoria: "Marketing",
    um: "Ore",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoUnitario: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTotale: "129.123.334,00€",
    utente: "User Image 2",
    azioni: "...",
  },
  {
    id: 3,
    cod: "MKR32-245-234-0",
    nomeServizio: "Nome del servizio",
    categoria: "Marketing",
    um: "Ore",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoUnitario: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTotale: "129.123.334,00€",
    utente: "User Image 3",
    azioni: "...",
  },
  {
    id: 4,
    cod: "MKR32-245-234-0",
    nomeServizio: "Nome del servizio",
    categoria: "Marketing",
    um: "Ore",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoUnitario: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTotale: "129.123.334,00€",
    utente: "User Image 4",
    azioni: "...",
  },
  {
    id: 5,
    cod: "MKR32-245-234-0",
    nomeServizio: "Nome del servizio",
    categoria: "Marketing",
    um: "Ore",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoUnitario: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTotale: "129.123.334,00€",
    utente: "User Image 5",
    azioni: "...",
  },
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
        <Table data={rows} columns={columns} navData={"servizi"} />
      </div>
    </>
  );
};

export default Servizi;
