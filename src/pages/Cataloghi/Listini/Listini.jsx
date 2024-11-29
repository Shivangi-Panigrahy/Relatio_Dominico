import React from 'react'
import Header from '../../../component/header/Header'
import FileDashboard from '../../../component/invoiceStatitics/FileDashboard'
import Table from "../../../component/table/Table"
import tableData from "../../../utils/serviziData.json";
const cards = [
    { "label": "Totale File", "value": 5543, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
    { "label": "Totale Cartelle", "value": 53, "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' },
    { "label": "Peso", "value": "1230.32 324.23 ITR", "color": "#fff", "textColor": "#100919", "statusColor": '#E72276' }
  ]

  const columns = [
    { field: "nomeListino", headerName: "Nome del listino", width: 180 },
    { field: "gruppiAssociati", headerName: "Gruppi associati", width: 160 },
    { field: "nProdotti", headerName: "N. prodotti", width: 120 },
    { field: "stato", headerName: "Stato", width: 100 },
    { field: "da", headerName: "Da", width: 80 },
    { field: "a", headerName: "A", width: 80 },
    { field: "priorita", headerName: "Priorità", width: 120 },
    { field: "autore", headerName: "Autore", width: 120 },
    { field: "modificatoDa", headerName: "Mod. da", width: 120 },
    { field: "azioni", headerName: "Azioni", width: 95 },
  ];
  
const Listini = () => {
  return (
    <>
    <Header/>
    <div className="pageTemplate">
        <FileDashboard cards={cards} />
        <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"listini"}
        />
      </div>
    </>
  )
}

export default Listini