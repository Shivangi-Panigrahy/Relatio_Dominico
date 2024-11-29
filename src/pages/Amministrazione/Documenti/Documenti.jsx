import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/budgetdata.json";

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
    { field: "Doc", headerName: "Doc", width: 64 },
    { field: "Numero", headerName: "Numero", width: 92 },
    { field: "Del", headerName: "Del", width: 114 },
    { field: "Clienti", headerName: "Clienti", width: 366 },
    { field: "Fornitiori", headerName: "Fornitiori", width: 284 },
    { field: "ModDa", headerName: "Mod. da", width: 273 },
    { field: "Autore", headerName: "Autore", width: 144 },
    { field: "CreatoIl", headerName: "Creato il", width: 145 },
    { field: "Totale", headerName: "Totale", width: 84 },
    { field: "Saldata", headerName: "Saldata", width: 84 },
    { field: "DaSaldare", headerName: "Da Saldare", width: 93 },
    { field: "Stato", headerName: "Stato", width: 142 },
    { field: "azioni", headerName: "Azioni", width: 93 },
  ];

  const rows = [
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    },
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    },
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    },
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    },
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    },
    {
      Doc: "Fattura",
      Numero: "12342343",
      Del: "28/11/2022",
      Clienti: "Azienda cliente srl",
      Fornitori: "Fornitore SPA",
      ModDa: "Author",
      Autore: "28/11/2022",
      CreatoIl: "28/11/2022",
      Totale: "129.123,334.00€",
      Saldata: "129.123,334.00€",
      DaSaldare: "0€",
      Stato: "Saldo",
      Azioni: "..."
    }
  ];
  
  

  return (
    <>
   <Header />
   <div className="pageTemplate">
   <InvoiceDashboard amministrazioneDocumenti={amministrazioneDocumentiData}/>
   <Table
          data={rows}
          columns={columns}
          navData={"AmministragionDocumenti"}
        />
   </div>
    </>
  )
}

export default AmministrazioneDocumenti
