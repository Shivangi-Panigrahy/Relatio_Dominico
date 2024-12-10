
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaGiacenze.json"

const GiacenzeStabilimenti = () => {

    const columns = [
        { field: "cod", headerName: "Cod.", width: 100 },
        { field: "lotto", headerName: "Lotto", width: 130 },
        { field: "scadenza", headerName: "Scadenza", width: 115 },
        { field: "prodotto", headerName: "Prodotto", width: 355 },
        { field: "marcaSerie", headerName: "Marca/serie", width: 245 },
        { field: "stabilimento", headerName: "Stabilimento", width: 160 },
        { field: "um", headerName: "U M", width: 85 },
        { field: "pzUnitario", headerName: "Pz. Unitario", width: 130 },
        { field: "qta", headerName: "Q.ta", width: 100 },
    ];


    return (
        <>
            <div className="pageTemplate">
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"GiacenzeStabilimenti"}
                />
            </div>
        </>
    )
}

export default GiacenzeStabilimenti