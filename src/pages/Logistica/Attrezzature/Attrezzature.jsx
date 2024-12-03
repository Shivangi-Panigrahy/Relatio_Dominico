import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaAttrezzature.json"

const Attrezzature = () => {

    const columns = [
        { field: "tipologiaAttrezzature", headerName: "Tipologia attrezzature", width: 200 },
        { field: "numeroDiSerie", headerName: "N. di serie", width: 150 },
        { field: "posizione", headerName: "Posizione", width: 200 },
        { field: "da", headerName: "Da", width: 150 },
        { field: "a", headerName: "A", width: 150 },
        { field: "autore", headerName: "Autore", width: 150 },
        { field: "modDa", headerName: "Mod. da", width: 150 },
        { field: "stato", headerName: "Stato", width: 150 },
        { field: "azioni", headerName: "Azioni", width: 100 },
    ];
    
    
    const rows = [
        {
            status: "Totale Attrezzature",
            count: 5543,
            amount: "",
            color: "#100919",
            iconColor: "",
        },
        {
            status: "Disponibili",
            count: 5543,
            amount: "",
            color: "#57C700",
            iconColor: "",
        },
        {
            status: "Occupati",
            count: 5543,
            amount: "",
            color: "#FFA903",
            iconColor: "",
        },
    ];


    return (
        <>
            <Header />
            <div className="pageTemplate">
                <InvoiceDashboard attrezzature={rows} />
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"attrezzature"}
                />
            </div>
        </>
    )
}

export default Attrezzature
