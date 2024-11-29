import Header from "../../../component/header/Header"
import Registri_header_Cards from "./Registri_header_Cards"
import Table from "../../../component/table/Table"
import Flussi_di_cassa_Below from "../Flussi_di_cassa/Flussi_di_cassa_Below";
import tableData from "../../../utils/primeNoteAdministrazioneData.json"

const Registri_IVA = () => {
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
      <div className="pageTemplate registri_page">
      <Registri_header_Cards />
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

export default Registri_IVA
