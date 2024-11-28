import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import Table from "../../../component/table/Table"

const Reteizzazione = () => {

  const OrdiniData = [
    {
      status: "Totale",
      count: 325,
      amount: "20.350.043.55€",
      color: "#100919",
      iconColor: "#57C700",
    },
    {
      status: "Pagate ",
      count: 325,
      amount: "20.350.043.55€",
      color: "#DB0000",
      iconColor: "#57C700",
    },
    {
      status: "Pagate",
      count: 325,
      amount: "20.350.043.55€",
      color: "#57C700",
      iconColor: "#57C700",
    },
  ];

  const columns = [
    { field: "scadenza", headerName: "Scadenza", width: 130},
    { field: "dataPagamento", headerName: "Data di pagamento", width: 167},
    { field: "rata", headerName: "Rata", width: 229},
    { field: "importo", headerName: "Importo", width: 150 },
    { field: "daSaldare", headerName: "Da saldare", width: 136},
    { field: "saldato", headerName: "Saldato", width: 136},
    { field: "stato", headerName: "Stato", width: 84},
    { field: "autore", headerName: "Autore", width: 84},
    { field: "modDa", headerName: "Mod. da", width: 84},
    { field: "azioni", headerName: "Azioni", width: 93},
  ];
  const rows = [
    {
      id: 1,
      scadenza: "31/11/2024",
      dataPagamento: "31/11/2024",
      rata: "Rata 1",
      importo: "129.123.334,00€",
      daSaldare: "0€",
      saldato: "129.123.334,00€",
      stato: "Pagata",
      autore: "Author Image 1",
      modDa: "Author Image 1",
      azioni: "...",
    },
    {
      id: 2,
      scadenza: "31/11/2024",
      dataPagamento: "31/11/2024",
      rata: "Rata 1",
      importo: "129.123.334,00€",
      daSaldare: "0€",
      saldato: "129.123.334,00€",
      stato: "Pagata",
      autore: "Author Image 2",
      modDa: "Author Image 2",
      azioni: "...",
    },
    {
      id: 3,
      scadenza: "31/11/2024",
      dataPagamento: "31/11/2024",
      rata: "Rata 1",
      importo: "129.123.334,00€",
      daSaldare: "0€",
      saldato: "129.123.334,00€",
      stato: "Pagata",
      autore: "Author Image 3",
      modDa: "Author Image 3",
      azioni: "...",
    },
    {
      id: 4,
      scadenza: "31/11/2024",
      dataPagamento: "31/11/2024",
      rata: "Rata 1",
      importo: "129.123.334,00€",
      daSaldare: "0€",
      saldato: "129.123.334,00€",
      stato: "Pagata",
      autore: "Author Image 4",
      modDa: "Author Image 4",
      azioni: "...",
    },
    {
      id: 5,
      scadenza: "31/11/2024",
      dataPagamento: "31/11/2024",
      rata: "Rata 1",
      importo: "129.123.334,00€",
      daSaldare: "0€",
      saldato: "129.123.334,00€",
      stato: "Pagata",
      autore: "Author Image 5",
      modDa: "Author Image 5",
      azioni: "...",
    },
  ];

  return (
    <>
   <div style={{paddingTop:'30px'}}>
   <InvoiceDashboard ordini={OrdiniData} reteizzazione={true}/>
   <Table
          data={rows}
          columns={columns}
          navData={"AmministragionReteizione"}
        />
   </div>
    </>
  )
}

export default Reteizzazione
