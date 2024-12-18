import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/progettiAttivitaData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";

const columns = [
    { field: "nomeProgetto", headerName: "Nome progetto", width: 530 },
    { field: "categoria", headerName: "Categoria", width: 210 },
    { field: "commitente", headerName: "Commitente", width: 180 },
    { field: "teamLeader", headerName: "Team leader", width: 180 },
    { field: "creatoIl", headerName: "Inizio", width: 105 },
    { field: "fine", headerName: "Fine", width: 105 },
    { field: "gUtilizzate", headerName: "G. Utilizzate", width: 120 },
    { field: "gResidue", headerName: "G. Residue", width: 120 },
    { field: "stato", headerName: "Stato", width: 105 },
    { field: "azioni", headerName: "Azioni", width: 95 },
];


const ProgettiData = [
    {
        status: "Totale Collaboratori",
        count: 53,
        color: "#100919",
    },
    {
        status: "Attivi",
        count: 12,
        color: "#57C700",
    },
    {
        status: "Inattivi",
        count: 32,
        color: "#FFA903",
    },
    {
        status: "Ruoli",
        count: 4,
        color: "#DB0000",
    },
    {
        status: "Ruoli",
        count: 4,
        color: "#DB0000",
    },
];
const AttivitaProgetti = () => {
    return (
        <>
            <Header />
            <div className="pageTemplate">
            
                <InvoiceDashboard acttivitaProgetti={ProgettiData} />
                <Table
                    data={tableData}
                    columns={columns}
                    navData={"attivita_progetti"}
                />
            
            </div>
        </>
    );
};

export default AttivitaProgetti;
