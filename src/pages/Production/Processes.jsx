import React from "react";
import Header from "../../component/header/Header";
import Table from "../../component/table/Table";
import tableData from "../../utils/Processi.json";
import ProcessesList from "../../component/Production/ProcessesList";

const columns = [
    { field: "numero", headerName: "numero", width: 90 },
    { field: "creatoil", headerName: "Creato il", width: 95 },
    { field: "prodottofinale", headerName: "Prodotto finale", width: 635 },
    { field: "processo", headerName: "Processo", width: 266 },
    { field: "da", headerName: "Da", width: 130 },
    { field: "a", headerName: "A", width: 130 },
    { field: "autore", headerName: "Autore", width: 85 },
    { field: "mod. da", headerName: "Mod. da", width: 85 },
    { field: "stato", headerName: "Stato", width: 145 },
    { field: "azioni", headerName: "Azioni", width: 95 },
];

const OrdiniData = [
    {
        status: "Processi",
        count: 5543,
        color: "#100919",
    },
    {
        status: "Prodotti",
        count: 5543,
        color: "#57C700",
    },
    {
        status: "Confermati",
        count: 9,
        color: "#FFA903",
    },
    {
        status: "In studio",
        count: 5,
        color: "#DB0000",
    },
    {
        status: "Scartati",
        count: 55,
        color: "#DB0000",
    },
];
const Processes = () => {
    
    return (
        <>
            <Header />
            <div className="pageTemplate ProductionsProcessiPage">
                <div className="colaboratory">
                <div className="ProductionsCards">
                    <ProcessesList ordini={OrdiniData} hr={true} />
                    </div>
                    <Table
                        data={tableData}
                        columns={columns}
                        navData={"Processi"}
                    />
                </div>
            </div>
        </>
    );
};

export default Processes;
