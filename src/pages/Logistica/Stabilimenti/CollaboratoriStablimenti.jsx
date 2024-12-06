
import Table from "../../../component/table/Table";
import tableData from "../../../utils/collaboratoriStablimentData.json"

const CollaboratoriStablimenti = () => {

    const columns = [
        { field: "collaboratore", headerName: "Collaboratore", width: 560 },
        { field: "ruolo", headerName: "Ruolo", width: 210 },
        { field: "livello", headerName: "Livello", width: 305 },
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];

    return (
        <>
            <div className="pageTemplate">
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"collaboratoriStablimenti"}
                />
            </div>
        </>
    )
}

export default CollaboratoriStablimenti