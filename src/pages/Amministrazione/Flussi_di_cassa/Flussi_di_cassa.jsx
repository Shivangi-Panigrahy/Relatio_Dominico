import Header from "../../../component/header/Header"
import Flussi_di_cassa_Below from "./Flussi_di_cassa_Below"
import Flussi_di_cassa_header_cards from "./Flussi_di_cassa_header_cards"
import Table from "../../../component/table/Table"
import tableData from "../../../utils/primeNoteAdministrazioneData.json"

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


  return (
    <>
    <Header />
    
    <div className="pageTemplate registri_page" >
    <Flussi_di_cassa_header_cards />
    <Flussi_di_cassa_Below />
    <Table
          data={tableData}
          columns={columns}
          navData={"AmministragionFlussi"}
        />
    </div>
    </>
  )
}

export default Flussi_di_cassa
