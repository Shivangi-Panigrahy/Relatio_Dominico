import Header from "../../../component/header/Header"
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard"
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaDDT.json"

const DDT = () => {

    const columns = [
        { field: "doc", headerName: "Doc.", width: 65 },
        { field: "creatoIl", headerName: "Creato il", width: 95 },
        { field: "numero", headerName: "Numero", width: 95 },
        { field: "fornitori", headerName: "Cliente/Fornitore", width: 655 },
        { field: "stabilimento", headerName: "Stabilimento di arrivo/partenza", width: 662 },
        { field: "autore", headerName: "Autore", width: 85},
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];
    


    // const rows = [
    //     {
    //         status: "Totale ",
    //         count: 5,
    //         amount: "20.350.043.55€",
    //         color: "#100919",
    //         iconColor: "#57C700",
    //     },
    //     {
    //         status: "Finanziario",
    //         count: 2,
    //         amount: "20.350.043.55€",
    //         color: "#57C700",
    //         iconColor: "#57C700",
    //     },
    //     {
    //         status: "Immobiliare",
    //         count: 1,
    //         amount: "20.350.043.55€",
    //         color: "#FFA903",
    //         iconColor: "#FFA903",
    //     },
    //     {
    //         status: "Strumentale",
    //         count: 13,
    //         amount: "20.350.043.55€",
    //         color: "#DB0000",
    //         iconColor: "#DB0000",
    //     },
    // ];


    return (
        <>
            <Header />
            <div className="pageTemplate">
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"DDT"}
                />
            </div>
        </>
    )
}

export default DDT
