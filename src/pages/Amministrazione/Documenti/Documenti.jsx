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
    { field: "doc", headerName: "Doc", width: 64 },
    { field: "numero", headerName: "Numero", width: 89 },
    { field: "del", headerName: "Del", width: 92 },
    { field: "clienti", headerName: "Clienti", width: 287 },
    { field: "fornitiori", headerName: "Fornitiori", width: 251 },
    { field: "modDa", headerName: "Mod. da", width: 129 },
    { field: "autore", headerName: "Autore", width: 84 },
    { field: "creatoIl", headerName: "Creato il", width: 97 },
    { field: "totale", headerName: "Totale", width: 139 },
    { field: "saldata", headerName: "Saldata", width: 139 },
    { field: "daSaldare", headerName: "Da Saldare", width: 139 },
    { field: "stato", headerName: "Stato", width: 142 },
    { field: "azioni", headerName: "Azioni", width: 93 },
  ];

 const  row = [
    {
      "id": 1,
      "doc": "Invoice",
      "creatoil": "01/01/2023",
      "numero": "BU/001",
      "titolo": "Purchase Order",
      "fornitori": "ABC Supplies Ltd.",
      "autore": "John Doe",
      "modda": "Jane Smith",
      "dataModifica": "02/01/2023",
      "valore": "50.000,00€",
      "stato": "Approvato"
    },
    {
      "id": 2,
      "doc": "Contract",
      "creatoil": "05/02/2023",
      "numero": "BU/002",
      "titolo": "Agreement",
      "fornitori": "Global Corp",
      "autore": "Alice Cooper",
      "modda": "Bob Martin",
      "dataModifica": "06/02/2023",
      "valore": "250.750,00€",
      "stato": "Approvato"
    },
    {
      "id": 3,
      "doc": "Receipt",
      "creatoil": "10/03/2023",
      "numero": "BU/003",
      "titolo": "Payment Confirmation",
      "fornitori": "Tech Solutions",
      "autore": "Chris Jordan",
      "modda": "Maria Lee",
      "dataModifica": "11/03/2023",
      "valore": "1.200,00€",
      "stato": "Approvato"
    },
    {
      "id": 4,
      "doc": "Estimate",
      "creatoil": "15/04/2023",
      "numero": "BU/004",
      "titolo": "Cost Estimate",
      "fornitori": "Construction Experts",
      "autore": "Dave Wilson",
      "modda": "Sarah Brown",
      "dataModifica": "16/04/2023",
      "valore": "500.000,00€",
      "stato": "Approvato"
    },
    {
      "id": 5,
      "doc": "Quotation",
      "creatoil": "20/05/2023",
      "numero": "BU/005",
      "titolo": "Price Quote",
      "fornitori": "Elite Enterprises",
      "autore": "Olivia Green",
      "modda": "Mark Harris",
      "dataModifica": "21/05/2023",
      "valore": "120.000,00€",
      "stato": "Approvato"
    }
  ]

  return (
    <>
   <Header />
   <div className="pageTemplate">
   <InvoiceDashboard amministrazioneDocumenti={amministrazioneDocumentiData}/>
   <Table
          data={tableData.tabData.tab1}
          columns={columns}
          navData={"budget"}
        />
   </div>
    </>
  )
}

export default AmministrazioneDocumenti
