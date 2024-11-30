import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import "./Prodotti.scss";

const columns = [
  { field: "img", headerName: "IMG", width: 64 },
  { field: "cod", headerName: "COD.", width: 100 },
  { field: "nomeProdotto", headerName: "Nome del prodotto", width: 200 },
  { field: "categoria", headerName: "Categoria", width: 100 },
  { field: "um", headerName: "UM", width: 80 },
  { field: "pzVendita", headerName: "Pz di vendita", width: 120 },
  { field: "costoServizio", headerName: "Costo servizio", width: 120 },
  { field: "ricavoU", headerName: "Ricavo U.", width: 100 },
  { field: "acquistato", headerName: "Acquistato", width: 120 },
  { field: "venduto", headerName: "Venduto", width: 120 },
  { field: "ricavoTot", headerName: "Ricavo tot", width: 120 },
  { field: "utente", headerName: "Utente", width: 100 },
  { field: "azioni", headerName: "Azioni", width: 80 },
];

const rows = [
  {
    id: 1,
    img: "Image Icon",
    cod: "MKR32-245-234-0",
    nomeProdotto: "Nome del prodotto",
    categoria: "Linea A",
    um: "Pezzi",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoU: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTot: "129.123.334,00€",
    utente: "User Image 1",
    azioni: "...",
  },
  {
    id: 2,
    img: "Image Icon",
    cod: "MKR32-245-234-0",
    nomeProdotto: "Nome del prodotto",
    categoria: "Linea A",
    um: "Pezzi",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoU: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTot: "129.123.334,00€",
    utente: "User Image 2",
    azioni: "...",
  },
  {
    id: 3,
    img: "Image Icon",
    cod: "MKR32-245-234-0",
    nomeProdotto: "Nome del prodotto",
    categoria: "Linea A",
    um: "Pezzi",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoU: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTot: "129.123.334,00€",
    utente: "User Image 3",
    azioni: "...",
  },
  {
    id: 4,
    img: "Image Icon",
    cod: "MKR32-245-234-0",
    nomeProdotto: "Nome del prodotto",
    categoria: "Linea A",
    um: "Pezzi",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoU: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTot: "129.123.334,00€",
    utente: "User Image 4",
    azioni: "...",
  },
  {
    id: 5,
    img: "Image Icon",
    cod: "MKR32-245-234-0",
    nomeProdotto: "Nome del prodotto",
    categoria: "Linea A",
    um: "Pezzi",
    pzVendita: "65€",
    costoServizio: "25€",
    ricavoU: "40€",
    acquistato: "9.123.334,00€",
    venduto: "129.123.334,00€",
    ricavoTot: "129.123.334,00€",
    utente: "User Image 5",
    azioni: "...",
  },
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

        <Table data={rows} columns={columns} navData={"prodotti"} />
      </div>
    </>
  );
};

export default Prodotti;
