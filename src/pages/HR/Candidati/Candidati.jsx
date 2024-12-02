import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import "./Candidati.scss";
import tableData from "../../../utils/candidatihr.json"

const columns = [
  { field: "canditato", headerName: "Canditato", width: 800 },
  { field: "ruolo", headerName: "Ruolo", width: 180 },
  { field: "livello", headerName: "Livello", width: 130 },
  { field: "trattIndividual", headerName: "Tratt. individual", width: 180 },
  { field: "disponibile", headerName: "Disponibile", width: 125 },
  { field: "ultimoColloquio", headerName: "Ultimo colloquio", width: 162 },
  { field: "utente", headerName: "Utente", width: 85 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];


const Candidati = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="candidati">
          <Table
            data={tableData}
            columns={columns}
            navData={"candidati"}
          />
        </div>
      </div>
    </>
  );
};

export default Candidati;