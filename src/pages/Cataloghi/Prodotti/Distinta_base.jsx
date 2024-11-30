import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/distintaCataloghiData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import ProductTable from "../../../component/ProductTable/ProductTable";

const columns = [
  { field: "img", headerName: "IMG", width: 62 }, // Image column
  { field: "cod", headerName: "COD.", width: 185 }, // Code column
  { field: "nome_del_prodotto", headerName: "Nome del prodotto", width: 550 }, // Product name column
  { field: "categoria", headerName: "Categoria", width: 200 }, // Category column
  { field: "um", headerName: "UM", width: 80 }, // Unit of measure
  { field: "qta", headerName: "Q.ta", width: 125}, // Quantity column
  { field: "azioni", headerName: "Azioni", width: 95 }, // Actions column
];



const prodottiData = [
  {
    status: "Toale componenti ",
    count: "",
    amount: "332",
    color: "#100919",
    iconColor: "",
  },
  {
    status: "Categorie componenti",
    count: "",
    amount: "5",
    color: "#100919",
    iconColor: "",
  },

];


const Distinta_base = () => {


  return (
    <>

      <div className="pageTemplate">

        <InvoiceDashboard servizi={prodottiData} />
        <Table
          data={tableData}
          columns={columns}
          navData={"distinta"}
        />
      </div>
    </>
  );
};

export default Distinta_base;
