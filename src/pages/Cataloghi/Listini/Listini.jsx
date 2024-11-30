import React from 'react'
import Header from '../../../component/header/Header'
import Table from "../../../component/table/Table"
import ListiniHeaderCard from './ListiniHeaderCard';
import tableData from "../../../utils/listiniCataloghiData.json"
const columns = [
  { field: "nomeListino", headerName: "Nome del listino", width: 520 },
  { field: "gruppiAssociati", headerName: "Gruppi associati", width: 299 },
  { field: "nProdotti", headerName: "N. prodotti", width: 170 },
  { field: "stato", headerName: "Stato", width: 142 },
  { field: "creatoIl", headerName: "Da", width: 128 },
  { field: "a", headerName: "A", width: 128 },
  { field: "priorita", headerName: "Priorità", width: 94 },
  { field: "autore", headerName: "Autore", width: 84 },
  { field: "modDa", headerName: "Mod. da", width: 84 },
  { field: "azioni", headerName: "Azioni", width: 93 },
];

  
const Listini = () => {
  return (
    <>
    <Header/>
    <div className="pageTemplate">
        <ListiniHeaderCard />
        <Table
          data={tableData}
          columns={columns}
          navData={"listini"}
        />
      </div>
    </>
  )
}

export default Listini