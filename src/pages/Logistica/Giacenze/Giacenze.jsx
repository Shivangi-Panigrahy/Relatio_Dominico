import { useLocation } from "react-router-dom";
import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaGiacenze.json"

const Giacenze = () => {

    const columns = [
        { field: "cod", headerName: "Cod.", width: 150 },
        { field: "lotto", headerName: "Lotto", width: 150 },
        { field: "dataArrivo", headerName: "Data arrivo", width: 150 },
        { field: "scadenza", headerName: "Scadenza", width: 150 },
        { field: "prodotto", headerName: "Prodotto", width: 200 },
        { field: "marcaSerie", headerName: "Marca/serie", width: 150 },
        { field: "stabilimento", headerName: "Stabilimento", width: 150 },
        { field: "um", headerName: "U M", width: 100 },
        { field: "pzUnitario", headerName: "Pz. Unitario", width: 150 },
        { field: "qta", headerName: "Q.ta", width: 100 },
        { field: "valore", headerName: "Valore", width: 150 },
        { field: "azioni", headerName: "Azioni", width: 100 },
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
