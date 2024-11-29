import React, { useEffect } from "react";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/allegatiData.json";
import hrTableData from "../../../utils/hrData.json";
import "./Allegati.scss";
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
  const path = window.location.pathname;
  const [data, setData] = React.useState([]);
  const [navData, setNavData] = React.useState([]);

  useEffect(() => {
    let allegatiData =
      path === "/hr/ferie-e-permisse/evento"
        ? hrTableData.hrData.eventoAllegati
        : path === "/hr/buste-page/busta"
        ? hrTableData.hrData.bustaAllegati
        : path === "/hr/candidati/candidato/Allegati" ||
          path === "/hr/colaboratory/sub-colaboratory/Allegati"
        ? hrTableData.hrData.candidatoAllegati
        : tableData.tabData.tab1;

    let allegatiNavData =
      path === "/hr/ferie-e-permisse/evento" ||
      path === "/hr/buste-page/busta" ||
      path === "/hr/candidati/candidato/Allegati" ||
      path === "/hr/colaboratory/sub-colaboratory/Allegati"
        ? "eventoAllegati"
        : "allegati";

    setData(allegatiData);
    setNavData(allegatiNavData);
  }, [path]);

  return (
    <>
      <div className="AllegatiTab">
        <Table data={data} columns={columns} navData={navData} />
      </div>
    </>
  );
};

export default Allegati;
