import React from "react";
import Header from "../../component/header/Header";
import ProductionDetails from "../../component/Production/ProductionDetails";
import ProductionsAccordion from "../../component/Production/ProductionsAccordion";
import './ProductionsDetails.scss'
import ProductionsArchive from "../../component/Production/ProductionsArchive";

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
        // count: 'INIZIO: 20/11/2024 - FINE: 28/11/2024',
        color: "#DB0000",
        countListDate: [
            { title: "INIZIO", date: "20/11/2024" },
            { title: "FINE", date: "28/11/2024" },
          ],
        
    },
    {
        status: "Stato della produzione",
        count: "In corso",
        phasetiming :[
            { title: "Fase", subtitle: "Piantumazione" },
            { title: "Tempistica:", subtitle: "Regolare" },
        ],
        // phase: "Fase Piantumazione",
        // timing: "Tempistica: Regolare",
        color: "#DB0000",
    }, 
];
const ArchiveDetails = () => {
    return (
        <div className="ProductionsDetailsList">
            <Header />
            <div className="pageTemplate">
                <div className="colaboratory">
                    <ProductionDetails archive={OrdiniData}  />
                    <ProductionsArchive />
                </div>
            </div>
        </div>
    );
};

export default ArchiveDetails;
