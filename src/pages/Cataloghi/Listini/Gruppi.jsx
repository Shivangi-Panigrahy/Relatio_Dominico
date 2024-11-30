import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import ProductTable from "../../../component/ProductTable/ProductTable";

const columns = [
    { field: "creatoil", headerName: "Creato il.", width: 100 },
    { field: "nomedelgruppo", headerName: "Nome del Gruppo", width: 100 },
    { field: "autore", headerName: "Autore", width: 100 },
    { field: "modDa", headerName: "Mod Da", width: 200 },
    { field: "validoda", headerName: "Valido da", width: 100 },
    { field: "validoA", headerName: "Valido a", width: 200 },
    { field: "stato", headerName: "Stato", width: 100 },
    { field: "azioni", headerName: "Azioni", width: 100 },


];
const rows = [
    {
        id: 1,
        creatoil: "28/11/2022",
        nomedelgruppo: "Clienti top",
        autore: "Avatar",
        modDa: "Avatar",
        validoda: "28/11/2022",
        validoA: "28/11/2022",
        stato: "Pezzi",
        azioni: "...",
    },
    {
        id: 2,
        id: 1,
        creatoil: "28/11/2022",
        nomedelgruppo: "Clienti top",
        autore: "Avatar",
        modDa: "Avatar",
        validoda: "28/11/2022",
        validoA: "28/11/2022",
        stato: "Pezzi",
        azioni: "...",
    },
    {
        id: 3,
        id: 1,
        creatoil: "28/11/2022",
        nomedelgruppo: "Clienti top",
        autore: "Avatar",
        modDa: "Avatar",
        validoda: "28/11/2022",
        validoA: "28/11/2022",
        stato: "Pezzi",
        azioni: "...",
    },
];

const Giacenze = () => {

    return (
        <>

            <div className="pageTemplate">

                <Table
                    data={rows}
                    columns={columns}
                    navData={"Gruppi"}
                />
            </div>
        </>
    );
};

export default Giacenze;
