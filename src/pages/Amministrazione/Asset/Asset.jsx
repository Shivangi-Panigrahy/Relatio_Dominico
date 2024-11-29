import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";

const AmministrazioneAsset = () => {

  const columns = [
    { field: "doc", headerName: "Doc", width: 64 },
    { field: "creatoIl", headerName: "Creato il", width: 92 },
    { field: "scadenza", headerName: "Scadenza", width: 114 },
    { field: "asset", headerName: "Asset", width: 366 },
    { field: "tipologia", headerName: "Tipologia", width: 284 },
    { field: "obiettivo", headerName: "Obiettivo", width: 273 },
    { field: "frequenza", headerName: "Frequenza", width: 144 },
    { field: "importoTotale", headerName: "Importo totale", width: 145 },
    { field: "autore", headerName: "Autore", width: 84 },
    { field: "modDa", headerName: "Mod. da", width: 84 },
    { field: "azioni", headerName: "Azioni", width: 93 },
    
  ];
  const rows = [
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore1",
      modDa: "Mod1",
      azioni: "..."
    },
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore2",
      modDa: "Mod2",
      azioni: "..."
    },
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore3",
      modDa: "Mod3",
      azioni: "..."
    },
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore4",
      modDa: "Mod4",
      azioni: "..."
    },
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore5",
      modDa: "Mod5",
      azioni: "..."
    },
    {
      doc: "Doc",
      creatoIl: "28/11/2022",
      scadenza: "28/11/2022",
      asset: "Assicurazione",
      tipologia: "Finanza",
      obiettivo: "Piano di accumulo",
      frequenza: "129.123.334,00€",
      importoTotale: "129.123.334,00€",
      autore: "Autore6",
      modDa: "Mod6",
      azioni: "..."
    }
  ];

  const amministrazioneAssetData = [
    {
      status: "Totale ",
      count: 5,
      amount: "20.350.043.55€",
      color: "#100919",
      iconColor: "#57C700",
    },
    {
      status: "Finanziario",
      count: 2,
      amount: "20.350.043.55€",
      color: "#57C700",
      iconColor: "#57C700",
    },
    {
      status: "Immobiliare",
      count: 1,
      amount: "20.350.043.55€",
      color: "#FFA903",
      iconColor: "#FFA903",
    },
    {
      status: "Strumentale",
      count: 13,
      amount: "20.350.043.55€",
      color: "#DB0000",
      iconColor: "#DB0000",
    },
  ];


  return (
    <>
    <Header />
    <div className="pageTemplate">
    <InvoiceDashboard amministrazioneAsset={amministrazioneAssetData}/>
    <Table
          data={rows}
          columns={columns}
          navData={"AmministragionAsset"}
        />
    </div>
     </>
  )
}

export default AmministrazioneAsset
