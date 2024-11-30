import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import ProductTable from "../../../component/ProductTable/ProductTable";

const columns = [
  { field: "img", headerName: "Img", width: 520 },
  { field: "code", headerName: "Code", width: 299 },
  { field: "name", headerName: "Name", width: 170 },
  { field: "category", headerName: "Category", width: 142 },
  { field: "unit", headerName: "Unit", width: 128 },
  { field: "quantity", headerName: "Quantity", width: 128 },
];
const rows = [
  {
      id: "1",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
  {
      id: "2",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
  {
      id: "3",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
  {
      id: "4",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
  {
      id: "5",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
  {
      id: "6",
      img: "",
      code: "MK/532-245-234-0",
      name: "Nome del prodotto",
      category: "Linea A",
      unit: "Pezzi",
      quantity: 4,
  },
];

const Prodotti = () => {


  return (
    <>

      <div className="pageTemplate">

      <Table
          data={rows}
          columns={columns}
          navData={"product"}
        />
      </div>
    </>
  );
};

export default Prodotti;
