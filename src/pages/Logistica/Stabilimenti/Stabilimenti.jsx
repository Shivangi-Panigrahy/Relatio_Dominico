import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaStabilimenti.json"

const Stabilimenti = () => {

    const columns = [
        { field: "nomeStabilimento", headerName: "Nome dello stabilimento", width: 250 },
        { field: "tipologia", headerName: "Tipologia", width: 150 },
        { field: "indirizzo", headerName: "Indirizzo", width: 300 },
        { field: "operativoDa", headerName: "Operativo da", width: 150 },
        { field: "utente", headerName: "Utente", width: 100 },
        { field: "azioni", headerName: "Azioni", width: 100 },
    ];
    

    return (
        <>
            <Header />
            <div className="pageTemplate">
                {/* <InvoiceDashboard amministrazioneAsset={rows} /> */}
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"stabilimenti"}
                />
            </div>
        </>
    )
}

export default Stabilimenti
