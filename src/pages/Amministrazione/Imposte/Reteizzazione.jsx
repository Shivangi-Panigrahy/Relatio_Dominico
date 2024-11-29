import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import Table from "../../../component/table/Table"
import tableData from "../../../utils/reteizzazioneData.json"
import './Imposte.scss'

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
    { field: "creatoil", headerName: "Scadenza", width: 130},
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


  return (
    <>
   <div style={{paddingTop:'30px'}} className="reteizzazionePage">
   <InvoiceDashboard ordini={OrdiniData} reteizzazione={true}/>
   <Table
          data={tableData}
          columns={columns}
          navData={"AmministragionReteizione"}
        />
   </div>
    </>
  )
}

export default Reteizzazione
