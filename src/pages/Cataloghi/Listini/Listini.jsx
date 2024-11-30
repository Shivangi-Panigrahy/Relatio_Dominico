import React from 'react'
import Header from '../../../component/header/Header'
import Table from "../../../component/table/Table"
import ListiniHeaderCard from './ListiniHeaderCard';
const columns = [
  { field: "nomeListino", headerName: "Nome del listino", width: 520 },
  { field: "gruppiAssociati", headerName: "Gruppi associati", width: 299 },
  { field: "nProdotti", headerName: "N. prodotti", width: 170 },
  { field: "stato", headerName: "Stato", width: 142 },
  { field: "da", headerName: "Da", width: 128 },
  { field: "a", headerName: "A", width: 128 },
  { field: "priorita", headerName: "Priorità", width: 94 },
  { field: "autore", headerName: "Autore", width: 84 },
  { field: "modDa", headerName: "Mod. da", width: 84 },
  { field: "azioni", headerName: "Azioni", width: 93 },
];
const rows = [
  {
    id: 1,
    nomeListino: "Rivenditori Top",
    gruppiAssociati: "Clienti top",
    nProdotti: 235,
    stato: "Attivo",
    da: "28/11/2022",
    a: "28/11/2022",
    priorita: 10,
    autore: "Author Image 1",
    modDa: "Author Image 1",
    azioni: "...",
  },
  {
    id: 2,
    nomeListino: "Rivenditori Top",
    gruppiAssociati: "Clienti top",
    nProdotti: 235,
    stato: "Attivo",
    da: "28/11/2022",
    a: "28/11/2022",
    priorita: 10,
    autore: "Author Image 2",
    modDa: "Author Image 2",
    azioni: "...",
  },
  {
    id: 3,
    nomeListino: "Rivenditori Top",
    gruppiAssociati: "Clienti top",
    nProdotti: 235,
    stato: "Attivo",
    da: "28/11/2022",
    a: "28/11/2022",
    priorita: 10,
    autore: "Author Image 3",
    modDa: "Author Image 3",
    azioni: "...",
  },
  {
    id: 4,
    nomeListino: "Rivenditori Top",
    gruppiAssociati: "Clienti top",
    nProdotti: 235,
    stato: "Attivo",
    da: "28/11/2022",
    a: "28/11/2022",
    priorita: 10,
    autore: "Author Image 4",
    modDa: "Author Image 4",
    azioni: "...",
  },
  {
    id: 5,
    nomeListino: "Rivenditori Top",
    gruppiAssociati: "Clienti top",
    nProdotti: 235,
    stato: "Attivo",
    da: "28/11/2022",
    a: "28/11/2022",
    priorita: 10,
    autore: "Author Image 5",
    modDa: "Author Image 5",
    azioni: "...",
  },
];
  
const Listini = () => {
  return (
    <>
    <Header/>
    <div className="pageTemplate">
        <ListiniHeaderCard />
        <Table
          data={rows}
          columns={columns}
          navData={"listini"}
        />
      </div>
    </>
  )
}

export default Listini