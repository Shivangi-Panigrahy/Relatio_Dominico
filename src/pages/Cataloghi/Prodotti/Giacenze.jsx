import React from "react";
import Header from "../../../component/header/Header";
import Table from "../../../component/table/Table";
import tableData from "../../../utils/serviziData.json";
import InvoiceDashboard from "../../../component/invoiceStatitics/InvoiceDashboard";
import ProductTable from "../../../component/ProductTable/ProductTable";

const columns = [
    { field: "cod", headerName: "Cod.", width: 100 },
    { field: "lotto", headerName: "Lotto", width: 100 },
    { field: "scadenza", headerName: "Scadenza", width: 100 },
    { field: "prodotto", headerName: "Prodotto", width: 200 },
    { field: "marcaSerie", headerName: "Marca/serie", width: 100 },
    { field: "stabilimento", headerName: "Stabilimento", width: 150 },
    { field: "um", headerName: "UM", width: 80 },
    { field: "pzUnitario", headerName: "Pz Unitario", width: 120 },
    { field: "qta", headerName: "Q.ta", width: 100 },
];
const rows = [
    {
        id: 1,
        cod: "BP-09-24",
        lotto: "32423",
        scadenza: "31/11/2024",
        prodotto: "Nome del Prodotto",
        marcaSerie: "Delux",
        stabilimento: "Stabilimento A",
        um: "Pezzi",
        pzUnitario: "129.123.334,00€",
        qta: "30292",
    },
    {
        id: 2,
        cod: "BP-09-24",
        lotto: "32423",
        scadenza: "31/11/2024",
        prodotto: "Nome del Prodotto",
        marcaSerie: "Delux",
        stabilimento: "Stabilimento A",
        um: "Pezzi",
        pzUnitario: "129.123.334,00€",
        qta: "30292",
    },
    {
        id: 3,
        cod: "BP-09-24",
        lotto: "32423",
        scadenza: "31/11/2024",
        prodotto: "Nome del Prodotto",
        marcaSerie: "Delux",
        stabilimento: "Stabilimento A",
        um: "Pezzi",
        pzUnitario: "129.123.334,00€",
        qta: "30292",
    },
    {
        id: 4,
        cod: "BP-09-24",
        lotto: "32423",
        scadenza: "31/11/2024",
        prodotto: "Nome del Prodotto",
        marcaSerie: "Delux",
        stabilimento: "Stabilimento A",
        um: "Pezzi",
        pzUnitario: "129.123.334,00€",
        qta: "30292",
    },
    {
        id: 5,
        cod: "BP-09-24",
        lotto: "32423",
        scadenza: "31/11/2024",
        prodotto: "Nome del Prodotto",
        marcaSerie: "Delux",
        stabilimento: "Stabilimento A",
        um: "Pezzi",
        pzUnitario: "129.123.334,00€",
        qta: "30292",
    },
];

const Giacenze = () => {


    return (
        <>

            <div className="pageTemplate">

                <Table
                    data={rows}
                    columns={columns}
                    navData={"Giacenze"}
                />
            </div>
        </>
    );
};

export default Giacenze;
