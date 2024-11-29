import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/fornitoriData.json";

const columns = [
  { field: "creatoIl", headerName: "Creato il", width: 92 },
  { field: "ragioneSociale", headerName: "Ragione sociale", width: 520 },
  { field: "piva", headerName: "P.IVA", width: 130 },
  { field: "tipo", headerName: "Tipo", width: 185 },
  { field: "gruppo", headerName: "Gruppo", width: 185 },
  { field: "regione", headerName: "Regione", width: 162 },
  { field: "Stato_name", headerName: "Stato", width: 80 },
  { field: "autore", headerName: "Autore", width: 85 },
  { field: "utente", headerName: "Utente", width: 85 },
  { field: "stato", headerName: "Stato", width: 142 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const Fornitori = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate ">
        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"fornitori"}
        />
      </div>
    </>
  );
};

export default Fornitori;
