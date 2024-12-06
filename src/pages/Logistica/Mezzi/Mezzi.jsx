import { useLocation } from "react-router-dom";
import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaMezzi.json"

const Mezzi = () => {

    const columns = [
        { field: "tipologiaMezzo", headerName: "Tipologia mezzo", width: 445 },
        { field: "targhe", headerName: "Targhe", width: 210 },
        { field: "posizione", headerName: "Posizione", width: 305 },
        { field: "km", headerName: "KM", width: 130 },
        { field: "creatoIl", headerName: "Da", width: 130 },
        { field: "a", headerName: "A", width: 130 },
        { field: "autore", headerName: "Autore", width: 85 },
        { field: "modDa", headerName: "Mod. da", width: 85 },
        { field: "stato", headerName: "Stato", width: 145 },
        { field: "azioni", headerName: "Azioni", width: 95 },
       
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

    const location = useLocation();
    const isLogisticaiMezzi = location.pathname === "/logistica/stabilimenti/Mezzi";
    return (
        <>
            {!isLogisticaiMezzi && <Header />}
            <div className="pageTemplate">
                {!isLogisticaiMezzi && (
                    <InvoiceDashboard mezzi={rows} />
                )}

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
