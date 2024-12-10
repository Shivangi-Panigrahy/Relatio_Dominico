import React from 'react'
import tableData from "../../../utils/attrezzatureStabilimentData.json"
import Table from "../../../component/table/Table";

const AttrezzatureStablimenti = () => {
    const columns = [
        { field: "tipologia", headerName: "Tipologia", width: 600 },
        { field: "numero", headerName: "N. di serie", width: 300 },
        { field: "posizione", headerName: "Posizione", width: 300 },
        { field: "azioni", headerName: "Azioni", width: 95 },
    ];

    return (
        <>
            <div className="pageTemplate">
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"attrezzatureStabiliment"}
                />
            </div>
        </>
    )
}

export default AttrezzatureStablimenti