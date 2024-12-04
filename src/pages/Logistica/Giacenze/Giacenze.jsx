import { useLocation } from "react-router-dom";
import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaGiacenze.json"

const Giacenze = () => {

    const columns = [
        { field: "cod", headerName: "Cod.", width: 100 },
        { field: "lotto", headerName: "Lotto", width: 130 },
        { field: "creatoIl", headerName: "Data arrivo", width: 115 },
        { field: "scadenza", headerName: "Scadenza", width: 115 },
        { field: "prodotto", headerName: "Prodotto", width: 355 },
        { field: "marcaSerie", headerName: "Marca/serie", width: 245 },
        { field: "stabilimento", headerName: "Stabilimento", width: 160 },
        { field: "um", headerName: "U M", width: 85 },
        { field: "pzUnitario", headerName: "Pz. Unitario", width: 130 },
        { field: "qta", headerName: "Q.ta", width: 100 },
        { field: "valore", headerName: "Valore", width: 130 },
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];


    const rows = [
        {
            status: "Giacenze",
            count: 5543,
            amount: "",
            color: "#100919",
            iconColor: "",
        },
        {
            status: "Prodotti",
            count: 5543,
            amount: "",
            color: "#57C700",
            iconColor: "",
        },
        {
            status: "Quantita",
            count: 5543,
            amount: "",
            color: "#FFA903",
            iconColor: "",
        },
        {
            status: "Marchio/Serie",
            count: 5543,
            amount: "",
            color: "#FFA903",
            iconColor: "",
        },
        {
            status: "Valore",
            count: "55.443,00€",
            amount: "",
            color: "#FFA903",
            iconColor: "",
        },
    ];

    const location = useLocation();
    const isLogisticaiGaicenze = location.pathname === "/logistica/stabilimenti/Gaicenze";
    const isLogisticaiMezzi = location.pathname === "/logistica/mezzi/Gaicenze";

    return (
        <>
            {!isLogisticaiGaicenze && !isLogisticaiMezzi && <Header />}
            <div className="pageTemplate">
                {!isLogisticaiGaicenze && !isLogisticaiMezzi && (
                    <InvoiceDashboard giacenze={rows} />
                )}

                <Table
                    data={tableData}
                    columns={columns}
                    navData={"giacenze"}
                />
            </div>
        </>
    )
}

export default Giacenze
