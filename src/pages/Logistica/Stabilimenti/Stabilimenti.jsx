import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/assetAdministrazioneData.json"

const Stabilimenti = () => {

    const columns = [
        { field: "doc", headerName: "Doc", width: 64 },
        { field: "creatoIl", headerName: "Creato il", width: 92 },
        { field: "scadenza", headerName: "Scadenza", width: 114 },
        { field: "asset", headerName: "Asset", width: 366 },
        { field: "tipologia", headerName: "Tipologia", width: 284 },
        { field: "obiettivo", headerName: "Obiettivo", width: 273 },
        { field: "frequenza", headerName: "Frequenza", width: 144 },
        { field: "importoTotale", headerName: "Importo totale", width: 145 },
        { field: "autore", headerName: "Autore", width: 84 },
        { field: "modDa", headerName: "Mod. da", width: 84 },
        { field: "azioni", headerName: "Azioni", width: 93 },

    ];


    const rows = [
        {
            status: "Totale ",
            count: 5,
            amount: "20.350.043.55€",
            color: "#100919",
            iconColor: "#57C700",
        },
        {
            status: "Finanziario",
            count: 2,
            amount: "20.350.043.55€",
            color: "#57C700",
            iconColor: "#57C700",
        },
        {
            status: "Immobiliare",
            count: 1,
            amount: "20.350.043.55€",
            color: "#FFA903",
            iconColor: "#FFA903",
        },
        {
            status: "Strumentale",
            count: 13,
            amount: "20.350.043.55€",
            color: "#DB0000",
            iconColor: "#DB0000",
        },
    ];


    return (
        <>
            <Header />
            <div className="pageTemplate assetPage">
                <InvoiceDashboard amministrazioneAsset={rows} />
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
