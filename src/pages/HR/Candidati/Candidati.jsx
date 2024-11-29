import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/hrData.json";
import "./Candidati.scss";
const columns = [
  { field: "canditato", headerName: "Canditato", width: 400 },
  { field: "ruolo", headerName: "Ruolo", width: 400 },
  { field: "livello", headerName: "Livello", width: 120 },
  { field: "trattIndividual", headerName: "Tratt. individual", width: 120 },
  { field: "disponibile", headerName: "Disponibile", width: 120 },
  { field: "ultimoColloquio", headerName: "Ultimo colloquio", width: 90 },
  { field: "utente", headerName: "Utente", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const Candidati = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="candidati">
          <Table
            data={tableData.hrData.candidati}
            columns={columns}
            navData={"candidati"}
          />
        </div>
      </div>
    </>
  );
};

export default Candidati;
