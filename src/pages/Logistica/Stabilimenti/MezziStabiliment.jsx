
import Table from "../../../component/table/Table";
import tableData from "../../../utils/logisticaSubMessData.json"

const MezziStabiliment = () => {

    const columns = [
        { field: "tipologiaMezzo", headerName: "Tipologia mezzo", width: 560 },
        { field: "targhe", headerName: "Targhe", width: 210 },
        { field: "posizione", headerName: "Posizione", width: 305 },
        { field: "km", headerName: "KM", width: 130 },
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];

    return (
        <>
            <div className="pageTemplate">
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"mezziStabiliment"}
                />
            </div>
        </>
    )
}

export default MezziStabiliment