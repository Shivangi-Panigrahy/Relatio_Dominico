import Header from "../../../component/header/Header"
import Flussi_di_cassa_Below from "./Flussi_di_cassa_Below"
import Flussi_di_cassa_header_cards from "./Flussi_di_cassa_header_cards"
import Table from "../../../component/table/Table"

const Flussi_di_cassa = () => {

  const columns = [
    { field: "data", headerName: "Data", width: 120 },
    { field: "documento", headerName: "Documento", width: 200 },
    { field: "clientiFornitori", headerName: "Clienti/Fornitori", width: 250 },
    { field: "entrata", headerName: "Entrata", width: 150 },
    { field: "uscita", headerName: "Uscita", width: 150 },
    { field: "utileContabile", headerName: "Utile contabile", width: 200 },
    { field: "tipo", headerName: "Tipo", width: 150 },
    { field: "modalita", headerName: "Modalità", width: 150 },
    { field: "tipoRisorsa", headerName: "Tipo risorsa", width: 150 },
    { field: "nomeRisorsa", headerName: "Nome risorsa", width: 300 },
    { field: "azioni", headerName: "Azioni", width: 100 },
  ];
  const rows = [
    {
      id: 1,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
    {
      id: 2,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
    {
      id: 3,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
    {
      id: 4,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
    {
      id: 5,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
    {
      id: 6,
      data: "28/11/2024",
      documento: "Fattura FA/262",
      clientiFornitori: "Cliente SPA",
      entrata: "10.234,09€",
      uscita: "-",
      utileContabile: "20.468,18€",
      tipo: "Saldo",
      modalita: "Bonifico",
      tipoRisorsa: "Banca",
      nomeRisorsa: "Banca del mutuo soccorso di Frosinone",
      azioni: "...",
    },
  ];

  return (
    <>
    <Header />
    
    <div className="pageTemplate">
    <Flussi_di_cassa_header_cards />
    <Flussi_di_cassa_Below />
    <Table
          data={rows}
          columns={columns}
          navData={"AmministragionFlussi"}
        />
    </div>
    </>
  )
}

export default Flussi_di_cassa
