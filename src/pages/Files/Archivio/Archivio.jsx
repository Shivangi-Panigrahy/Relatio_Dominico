import React from 'react'
import Header from '../../../component/header/Header'
import InvoiceDashboard from '../../../component/invoiceStatitics/InvoiceDashboard';
import Table from "../../../component/table/Table"
import tableData from "../../../utils/repositoryData.json";
import FileDashboard from '../../../component/invoiceStatitics/FileDashboard';

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

const cards = [
  { "label": "Totale File", "value": 5543, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
  { "label": "Totale Cartelle", "value": 53, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
  { "label": "Peso", "value": "1230.32 324.23 ITR", "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' }
]

const Archivio = () => {
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

export default Archivio