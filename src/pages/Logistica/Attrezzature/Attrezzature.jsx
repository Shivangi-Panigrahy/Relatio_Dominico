import { useLocation } from "react-router-dom";
import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaAttrezzature.json"

const Attrezzature = () => {

    const columns = [
        { field: "tipologiaAttrezzature", headerName: "Tipologia attrezzature", width: 485 },
        { field: "numeroDiSerie", headerName: "N. di serie", width: 300 },
        { field: "posizione", headerName: "Posizione", width: 300 },
        { field: "creatoIl", headerName: "Da", width: 130 },
        { field: "a", headerName: "A", width: 130 },
        { field: "autore", headerName: "Autore", width: 85 },
        { field: "modDa", headerName: "Mod. da", width: 85 },
        { field: "stato", headerName: "Stato", width: 145 },
        { field: "azioni", headerName: "Azioni", width: 95 },
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

    const location = useLocation();
    const isLogisticaiAttrezzature = location.pathname === "/logistica/stabilimenti/Attrezzature";

    return (
        <>
            {!isLogisticaiAttrezzature && <Header />}
            <div className="pageTemplate">
                {!isLogisticaiAttrezzature && (
                    <InvoiceDashboard attrezzature={rows} />
                )}

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
