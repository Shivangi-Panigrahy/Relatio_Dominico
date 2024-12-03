import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaMezzi.json"

const Mezzi = () => {

    const columns = [
        { field: "tipologiaMezzo", headerName: "Tipologia mezzo", width: 200 },
        { field: "targhe", headerName: "Targhe", width: 150 },
        { field: "posizione", headerName: "Posizione", width: 200 },
        { field: "km", headerName: "KM", width: 150 },
        { field: "da", headerName: "Da", width: 150 },
        { field: "a", headerName: "A", width: 150 },
        { field: "autore", headerName: "Autore", width: 150 },
        { field: "modDa", headerName: "Mod. da", width: 150 },
        { field: "stato", headerName: "Stato", width: 150 },
        { field: "azioni", headerName: "Azioni", width: 100 },
    ];
    


    const rows = [
        {
            status: "Totale Mezzi",
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
            <div className="pageTemplate assetPage">
                <InvoiceDashboard mezzi={rows} />
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"mezzi"}
                />
            </div>
        </>
    )
}

export default Mezzi
