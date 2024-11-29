import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/documentiAdministrazioneData.json";
import './Documenti.scss'

const AmministrazioneDocumenti = () => {
  const amministrazioneDocumentiData = [
    {
      status: "Totale",
      count: 325,
      amount: "20.350.043.55€",
      color: "#100919",
      iconColor: "#57C700",
    },
    {
      status: "Saldate",
      count: 325,
      amount: "20.350.043.55€",
      color: "#57C700",
      iconColor: "#57C700",
    },
    {
      status: "Saldate parzialmente",
      count: 325,
      amount: "20.350.043.55€",
      color: "#FFA903",
      iconColor: "#FFA903",
    },
    {
      status: "Scadute",
      count: 325,
      amount: "20.350.043.55€",
      color: "#DB0000",
      iconColor: "#DB0000",
    },
  ];

  const columns = [
    { field: "doc", headerName: "Doc", width: 64 },
    { field: "numero", headerName: "Numero", width: 92 },
    { field: "del", headerName: "Del", width: 114 },
    { field: "clienti", headerName: "Clienti", width: 366 },
    { field: "fornitori", headerName: "Fornitiori", width: 284 },
    { field: "modDa", headerName: "Mod. da", width: 273 },
    { field: "autore", headerName: "Autore", width: 144 },
    { field: "creatoIl", headerName: "Creato il", width: 145 },
    { field: "totale", headerName: "Totale", width: 84 },
    { field: "saldata", headerName: "Saldata", width: 84 },
    { field: "dasaldare", headerName: "Da Saldare", width: 93 },
    { field: "stato", headerName: "Stato", width: 142 },
    { field: "azioni", headerName: "Azioni", width: 93 },
  ];

 



  return (
    <>
      <Header />
      <div className="pageTemplate documentiPage">
        <InvoiceDashboard amministrazioneDocumenti={amministrazioneDocumentiData} />
        <Table
          data={tableData}
          columns={columns}
          navData={"AmministragionDocumenti"}
        />
      </div>
    </>
  )
}

export default AmministrazioneDocumenti
