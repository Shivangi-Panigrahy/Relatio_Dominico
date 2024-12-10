import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaStabilimenti.json"
import "./Stabilimenti.scss"
const Stabilimenti = () => {

    const columns = [
        { field: "nomeStabilimento", headerName: "Nome dello stabilimento", width: 610 },
        { field: "tipologia", headerName: "Tipologia", width: 300 },
        { field: "indirizzo", headerName: "Indirizzo", width: 530 },
        { field: "operativoDa", headerName: "Operativo da", width: 130 },
        { field: "utente", headerName: "Utente", width: 85 },
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];


    return (
        <>
            <Header />
            <div className="pageTemplate">
                <div className="stabilimenti">
                    {/* <InvoiceDashboard amministrazioneAsset={rows} /> */}
                    <Table
                        data={tableData}
                        columns={columns}
                        navData={"stabilimenti"}
                    />
                </div>
            </div>
        </>
    )
}

export default Stabilimenti
