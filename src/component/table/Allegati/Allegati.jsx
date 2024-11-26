import React from "react";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/allegatiData.json";

const columns = [
  { field: "tipo", headerName: "Tipo", width: 70 },
  { field: "nome", headerName: "Nome", width: 255 },
  { field: "categoria", headerName: "Categoria", width: 165 },
  { field: "tipologia", headerName: "Tipologia", width: 115 },
  { field: "peso", headerName: "Peso", width: 110 },
  { field: "caricatoIl", headerName: "Caricato il", width: 120 },
  { field: "ultimaMod", headerName: "Ultima Mod.", width: 120 },
  { field: "caricatoDa", headerName: "Caricato da", width: 120 },
  { field: "modificatoDa", headerName: "Modificato da", width: 130 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];

const Allegati = () => {
  return (
    <>
      <Table
        data={tableData.tabData.tab1}
        columns={columns}
        navData={"allegati"}
      />
    </>
  );
};

export default Allegati;
