import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"

const AmministrazioneImposte = () => {

  const columns = [
    { field: "creatoIl", headerName: "Creato il", width: 92 },
    { field: "anno", headerName: "Anno", width: 92 },
    { field: "scadenza", headerName: "Scadenza", width: 112 },
    { field: "nomeImposta", headerName: "Nome Imposta", width: 501 },
    { field: "tipologia", headerName: "Tipologia", width: 179 },
    { field: "realizzata", headerName: "Realizzata", width: 100 },
    { field: "autore", headerName: "Autore", width: 120 },
    { field: "modDa", headerName: "Mod. da", width: 120 },
    { field: "totale", headerName: "Totale", width: 150 },
    { field: "saldato", headerName: "Saldato", width: 150 },
    { field: "daSaldare", headerName: "Da saldare", width: 150 },
    { field: "azioni", headerName: "Azioni", width: 100 },
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
  
  return (
    <>
    <Header />
    <div className="pageTemplate">
    <InvoiceDashboard amministrazioneDocumenti={true}/>
    </div>
     </>
  )
}

export default AmministrazioneImposte
