import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table"

const AmministrazioneImposte = () => {

  const columns = [
    { field: "creatoIl", headerName: "Creato il", width: 92 },
    { field: "anno", headerName: "Anno", width: 92 },
    { field: "scadenza", headerName: "Scadenza", width: 112 },
    { field: "nomeImposta", headerName: "Nome Imposta", width: 501 },
    { field: "tipologia", headerName: "Tipologia", width: 179 },
    { field: "realizzata", headerName: "Realizzata", width: 116 },
    { field: "autore", headerName: "Autore", width: 84 },
    { field: "modDa", headerName: "Mod. da", width: 84 },
    { field: "totale", headerName: "Totale", width: 130 },
    { field: "saldato", headerName: "Saldato", width: 130 },
    { field: "daSaldare", headerName: "Da saldare", width: 130 },
    { field: "azioni", headerName: "Azioni", width: 93 },
  ];

  const rows = [
    {
      id: 1,
      creatoIl: "28/11/2022",
      anno: "2022",
      scadenza: "28/11/2022",
      nomeImposta: "F24 Dipendenti 09-24",
      tipologia: "Contributi",
      realizzata: "SI",
      autore: "Author Name",
      modDa: "Modifier Name",
      totale: "129.123.334,00€",
      saldato: "129.123.334,00€",
      daSaldare: "129.123.334,00€",
      azioni: "...",
    },
    {
      id: 2,
      creatoIl: "28/11/2022",
      anno: "2022",
      scadenza: "28/11/2022",
      nomeImposta: "F24 Dipendenti 09-24",
      tipologia: "Contributi",
      realizzata: "SI",
      autore: "Author Name",
      modDa: "Modifier Name",
      totale: "129.123.334,00€",
      saldato: "129.123.334,00€",
      daSaldare: "129.123.334,00€",
      azioni: "...",
    },
    {
      id: 3,
      creatoIl: "28/11/2022",
      anno: "2022",
      scadenza: "28/11/2022",
      nomeImposta: "F24 Dipendenti 09-24",
      tipologia: "Contributi",
      realizzata: "SI",
      autore: "Author Name",
      modDa: "Modifier Name",
      totale: "129.123.334,00€",
      saldato: "129.123.334,00€",
      daSaldare: "129.123.334,00€",
      azioni: "...",
    },
    {
      id: 4,
      creatoIl: "28/11/2022",
      anno: "2022",
      scadenza: "28/11/2022",
      nomeImposta: "F24 Dipendenti 09-24",
      tipologia: "Contributi",
      realizzata: "SI",
      autore: "Author Name",
      modDa: "Modifier Name",
      totale: "129.123.334,00€",
      saldato: "129.123.334,00€",
      daSaldare: "129.123.334,00€",
      azioni: "...",
    },
    {
      id: 5,
      creatoIl: "28/11/2022",
      anno: "2022",
      scadenza: "28/11/2022",
      nomeImposta: "F24 Dipendenti 09-24",
      tipologia: "Contributi",
      realizzata: "SI",
      autore: "Author Name",
      modDa: "Modifier Name",
      totale: "129.123.334,00€",
      saldato: "129.123.334,00€",
      daSaldare: "129.123.334,00€",
      azioni: "...",
    },
  ];
  const imposteData = [
    {
      status: "Da qualificare",
      count: "",
      amount: "20.350.043.55€",
      color: "#100919",
      iconColor: "#57C700",
    },
    {
      status: "Da contattare",
      count: "",
      amount: "20.350.043.55€",
      color: "#57C700",
      iconColor: "#57C700",
    },
    {
      status: "Contattati",
      count: "",
      amount: "20.350.043.55€",
      color: "#FFA903",
      iconColor: "#FFA903",
    },
    {
      status: "In trattativa",
      count: "",
      amount: "20.350.043.55€",
      color: "#DB0000",
      iconColor: "#DB0000",
    },
  ];
  
  return (
    <>
    <Header />
    <div className="pageTemplate">
    <InvoiceDashboard amministrazioneImposte={imposteData}/>
    <Table
          data={rows}
          columns={columns}
          navData={"AmministragioneImposte"}
        />
    </div>
     </>
  )
}

export default AmministrazioneImposte
