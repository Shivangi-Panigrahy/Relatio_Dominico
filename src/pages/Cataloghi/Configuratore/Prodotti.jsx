import React from "react";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/distintaCataloghiData.json";


const columns = [
  { field: "img", headerName: "IMG", width: 62 }, // Image column
  { field: "cod", headerName: "COD.", width: 185 }, // Code column
  { field: "nome_del_prodotto", headerName: "Nome del prodotto", width: 550 }, // Product name column
  { field: "categoria", headerName: "Categoria", width: 200 }, // Category column
  { field: "um", headerName: "UM", width: 80 }, // Unit of measure
  { field: "qta", headerName: "Q.ta", width: 125}, // Quantity column
  { field: "azioni", headerName: "Azioni", width: 95 }, // Actions column
];

const Prodotti = () => {


  return (
    <>

      <div className="pageTemplate">

      <Table
          data={tableData}
          columns={columns}
          navData={"conf_prodotti"}
        />
      </div>
    </>
  );
};

export default Prodotti;
