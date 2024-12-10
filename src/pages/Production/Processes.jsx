import React from "react";
import Header from "../../component/header/Header";
import Table from "../../component/table/Table";
import tableData from "../../utils/Processi.json";
import ProcessesList from "../../component/Production/ProcessesList";

const columns = [
    { field: "numero", headerName: "numero", width: 100 },
    { field: "creatoil", headerName: "Creato il", width: 100 },
    { field: "prodottofinale", headerName: "Prodotto finale", width: 90 },
    { field: "processo", headerName: "Processo", width: 180 },
    { field: "da", headerName: "Da", width: 120 },
    { field: "a", headerName: "A", width: 120 },
    { field: "autore", headerName: "Autore", width: 120 },
    { field: "mod. da", headerName: "Mod. da", width: 90 },
    { field: "stato", headerName: "Stato", width: 90 },
    { field: "azioni", headerName: "Azioni", width: 90 },
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
