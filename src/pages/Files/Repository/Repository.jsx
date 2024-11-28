import React from 'react'
import Header from '../../../component/header/Header'
import InvoiceDashboard from '../../../component/invoiceStatitics/InvoiceDashboard';
import Table from "../../../component/table/Table"
import tableData from "../../../utils/repositoryData.json";
import FileDashboard from '../../../component/invoiceStatitics/FileDashboard';
const budgetData = [
  {
    status: "Totale",
    count: 325,
    amount: "20.350.043.55€",
    color: "#57C700",
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
    status: "Sospesi",
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
const columns = [
  { field: "tipo", headerName: "Tipo", width: 70 },
  { field: "nome", headerName: "Nome", width: 545 },
  { field: "categoria", headerName: "Categoria", width: 245 },
  { field: "tipologia", headerName: "Tipologia", width: 180 },
  { field: "peso", headerName: "Peso", width: 130},
  { field: "caricatoIl", headerName: "Caricato il", width: 120 },
  { field: "ultimaMod", headerName: "Ultima Mod.", width: 120 },
  { field: "caricatoDa", headerName: "Caricato da", width: 120 },
  { field: "modificatoDa", headerName: "Modificato da", width: 130 },
  { field: "azioni", headerName: "Azioni", width: 95 },
];

const cards = [
  { "label": "Totale File", "value": 5543, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
  { "label": "Totale Cartelle", "value": 53, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
  { "label": "Peso", "value": "1230.32 324.23 ITR", "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' }
]

const Repository = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <FileDashboard cards={cards} />
        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"repository"}
        />
      </div>
    </>
  )
}

export default Repository