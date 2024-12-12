import React from "react";
import Header from "../../component/header/Header";
import Table from "../../component/table/Table";
import tableData from "../../utils/archive.json";
import ArchiveList from "../../component/Production/ArchiveList";

const columns = [
    { field: "numero", headerName: "Numero", width: 90 },
    { field: "creatoil", headerName: "Creato il", width: 95 },
    { field: "lotto", headerName: "Lotto", width: 165 },
    { field: "prodotto", headerName: "Prodotto", width: 320 },
    { field: "fase", headerName: "Fase", width: 215 },
    { field: "stabilimento", headerName: "Stabilimento", width: 185 },
    { field: "datainizio", headerName: "Data inizio", width: 130 },
    { field: "datafine", headerName: "Data fine", width: 130 },
    { field: "modda", headerName: "Mod. da", width: 95 },
    { field: "autore", headerName: "Autore", width: 95 },
    { field: "stato", headerName: "Stato", width: 140 },
    { field: "azioni", headerName: "Azioni", width: 95 },
];

const OrdiniData = [
    {
        status: "Produttori",
        count: 5543,
        color: "#100919",
    },
    {
        status: "Prodotti",
        count: 5543,
        color: "#57C700",
    },
    {
        status: "In corso",
        count: 5543,
        color: "#FFA903",
    },
    {
        status: "Completate",
        count: 5543,
        color: "#DB0000",
    },
    {
        status: "In attesa",
        count: 55,
        color: "#DB0000",
    },
];
const Archive = () => {

    return (
        <>
            <Header />
            <div className="pageTemplate ProductionsProcessiPage">
                <div className="colaboratory">
                    <div className="ProductionsCards">
                        <ArchiveList ordini={OrdiniData}  />
                    </div>
                    <Table
                        data={tableData}
                        columns={columns}
                        navData={"Archive"}
                    />
                </div>
            </div>
        </>
    );
};

export default Archive;
