import React from "react";
import Header from "../../component/header/Header";
import Table from "../../component/table/Table";
import tableData from "../../utils/ProductionList.json";
import ProductionList from "../../component/Production/ProductionList";

const columns = [
  { field: "numero", headerName: "Numero", width: 100 },
  { field: "creato il", headerName: "Creato il", width: 100 },
  { field: "lotto", headerName: "Lotto", width: 90 },
  { field: "prodotto", headerName: "Prodotto", width: 180 },
  { field: "fase", headerName: "Fase", width: 120 },
  { field: "stabilimento", headerName: "Stabilimento", width: 120 },
  { field: "data inizio", headerName: "Data inizio", width: 120 },
  { field: "data fine", headerName: "Data fine", width: 90 },
  { field: "mod. da", headerName: "Mod. da", width: 90 },
  { field: "autore", headerName: "Autore", width: 90 },
  { field: "stato", headerName: "Stato", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

const OrdiniData = [
  {
    status: "Produzione",
    count: 5543,
    color: "#100919",
  },
  {
    status: "Prodotti",
    count: 5543,
    color: "#57C700",
  },
  {
    status: "In corso",
    count: 5543,
    color: "#FFA903",
  },
  {
    status: "Completati",
    count: 5543,
    color: "#DB0000",
  },
  {
    status: "In attesa",
    count: 55,
    color: "#DB0000",
  },
];
const Productions = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <div className="colaboratory">
        <div className="ProductionsCards">
          <ProductionList ordini={OrdiniData} hr={true} />
          </div>
          </div>
          <Table
            data={tableData}
            columns={columns}
            navData={"Productions"}
          />
        </div>
    </>
  );
};

export default Productions;
