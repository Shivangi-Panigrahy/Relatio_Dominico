import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
  { field: "doc", headerName: "Doc", width: 70 },
  { field: "creatoIl", headerName: "Creato il", width: 100 },
  { field: "numero", headerName: "Numero", width: 100 },
  { field: "titolo", headerName: "Titolo", width: 380 },
  { field: "fornitori", headerName: "Fornitori", width: 280 },
  { field: "autore", headerName: "Autore", width: 80 },
  { field: "modDa", headerName: "Mod. da", width: 80 },
  { field: "dataModifica", headerName: "Data Modifica", width: 100 },
  { field: "valore", headerName: "Valore", width: 120 },
  { field: "stato", headerName: "Stato", width: 100 },
  { field: "azioni", headerName: "Azioni", width: 100 },
];
const preventiviData = [
  {
    status: "Totale",
    count: 325,
    amount: "20.350.043.55€",
    color: "#100919",
    iconColor: "#57C700",
  },
  {
    status: "Approvati",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
    iconColor: "#57C700",
  },
  {
    status: "Da approvare",
    count: 325,
    amount: "20.350.043.55€",
    color: "#FFA903",
    iconColor: "#FFA903",
  },
  {
    status: "Rifiutati",
    count: 325,
    amount: "20.350.043.55€",
    color: "#DB0000",
    iconColor: "#DB0000",
  },
];


const Servizi = () => {


  return (
    <>
      <Header />

      <div className="pageTemplate">

        <InvoiceDashboard servizi={preventiviData} />


        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"servizi"}
        />
      </div>
    </>
  );
};

export default Servizi;
