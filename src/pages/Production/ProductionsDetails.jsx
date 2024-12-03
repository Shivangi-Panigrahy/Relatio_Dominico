import React from "react";
import Header from "../../component/header/Header";
import Table from "../../component/table/Table";
import tableData from "../../utils/ProductionList.json";
import ProductionList from "../../component/Production/ProductionList";
import ProductionDetails from "../../component/Production/ProductionDetails";

const OrdiniData = [
    {
        status: "Numero di produzione",
        count: 5543,
        color: "#100919",
    },
    {
        status: "Prodotti",
        count: "Zafferano DOP",
        color: "#57C700",
    },
    {
        status: "Lotto",
        count: '5543202024ZFD',
        color: "#FFA903",
    },
    {
        status: "Obiettivo di produzione Q.tà",
        count: '5543 Kg',
        color: "#DB0000",
    },
    {
        status: "Stabilimento",
        count: 'Campo 325',
        color: "#DB0000",
    },
    {
        status: "Data",
        count: 'INIZIO: 20/11/2024 - FINE: 28/11/2024',
        color: "#DB0000",
    },
    {
        status: "Stato della produzione",
        count: "In corso",
        phase: "Piantumazione",
        timing: "Regolare",
        color: "#DB0000",
    },
];
const ProductionsDetails = () => {
    return (
        <>
            <Header />
            <div className="pageTemplate">
                <div className="colaboratory">
                    <ProductionDetails ordini={OrdiniData} hr={true} />
                    {/* <Table
            data={tableData}
            columns={columns}
            navData={"Productions"}
          /> */}
                </div>
            </div>
        </>
    );
};

export default ProductionsDetails;
