import React, { useEffect, useState } from "react";
import MenuTab from "../../component/tabs/MenuTab";
import Header from "../../component/header/Header";
import tableSubData from "../../utils/invoiceTableSubData.json";
import ProductTable from "./Table/ProductTable";
import InvoiceFooter from "./InvoiceFooter";
import dayjs from "dayjs";
import SearchTable from "../../component/filter/Searchtable";
import tableData from "../../utils/invoiceTableData.json";
import InvoiceTab from "./InvoiceTab";
import InvoiceTableFooter from "./InvoiceTableFooter";
import PreventivoTextEditor from "./PreventivoTextEditor";
import ProductionInfo from "./productInfo";

const InvoicePage = () => {
  // State to track the active main tab
  const [activeTab, setActiveTab] = useState("tab1");
  // State to track the active sub-tab
  const [activeSubTab, setSubActiveTab] = useState("");
  // State to track the selected value
  const [value, setValue] = useState(-1);
  const [page, setPage] = useState(0);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [valoreFilter, setValoreFilter] = useState("");
  const [searchFilters, setSearchFilters] = useState({});
  const [activeFilters, setActiveFilters] = useState({});
  const [sortOrder, setSortOrder] = useState({ field: "", direction: "" });

  // Define data here before using it
  const data = activeSubTab
    ? tableSubData?.tabData[activeSubTab] // Use sub-tab data if active
    : tableData?.tabData[activeTab];

  const columns = [
    { field: "prodotto", headerName: "Prodotto", width: 200 },
    { field: "quantita", headerName: "Quantità", width: 150, align: "right" },
    { field: "prezzo", headerName: "Prezzo", width: 150, align: "right" },
    { field: "sconto", headerName: "Sconto", width: 100, align: "right" },
    { field: "iva", headerName: "IVA", width: 100, align: "right" },
    { field: "totale", headerName: "Totale", width: 150, align: "right" },
    { field: "actions", headerName: "Azioni", width: 100, sortable: false },
  ];

  const [filteredData, setFilteredData] = useState(data);
  console.log(searchFilters, "searchFiltersoutside");

  const applyFilters = () => {
    let result = data;
    // Text search filter
    console.log(searchFilters, "searchFiltersinside");

    if (searchFilters?.searchTerm) {
      const term = searchFilters.searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.titolo.toLowerCase().includes(term) ||
          item.clienti.toLowerCase().includes(term) ||
          item.fornitori.toLowerCase().includes(term)
      );
    }
    if (searchFilters.searchTerm == "") {
      result = data;
    }

    // Check if searchFilters.data exists before proceeding with filtering
    if (searchFilters.StartDate && searchFilters.EndDate) {
      // Parse the start and end dates using Day.js in the format "DD/MM/YYYY"
      const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY"); // Start date from search filters
      const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY"); // End date from search filters

      // Proceed only if both parsed dates are valid
      if (startDate.isValid() && endDate.isValid()) {
        // Filter the result set based on the item dates
        result = result?.filter((item) => {
          // Parse the date from the item using Day.js
          const itemDate = dayjs(item?.data, "DD/MM/YYYY"); // Date field in each item

          // Check if the parsed item date is valid
          return (
            itemDate.isValid() && // Ensure item date is a valid date
            itemDate.isBetween(startDate, endDate, null, "[]") // Check if the item date falls within the specified range (inclusive)
          );
        });
      }
    }

    // Value filters
    if (searchFilters.prodotto) {
      result = result.filter(
        (item) => item.prodotto === searchFilters.prodotto
      );
    }

    if (searchFilters.sconto) {
      result = result.filter((item) => item.sconto === searchFilters.sconto);
    }

    if (searchFilters.quantita) {
      result = result.filter(
        (item) => item.quantita === searchFilters.quantita
      );
    }

    if (searchFilters.Prezzo) {
      result = result.filter(
        (item) => item.Prezzo === parseInt(searchFilters.Prezzo)
      );
    }

    // Status and client filters

    if (sortOrder.field && sortOrder.direction) {
      result.sort((a, b) => {
        const aValue = a[sortOrder.field];
        const bValue = b[sortOrder.field];

        if (typeof aValue === "string") {
          return sortOrder.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          return sortOrder.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }
      });
    }

    setFilteredData(result);
    setPage(0);
  };

  useEffect(() => {
    applyFilters();
  }, [data, searchFilters, sortOrder]);

  //   useEffect(() => {
  //     applyFilters();
  //   }, [data, searchFilters]);

  const handleSort = (field) => {
    const direction =
      sortOrder.field === field
        ? sortOrder.direction === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSortOrder({ field, direction });
  };

  const handleValoreFilter = (selectedValore) => {
    setValoreFilter(selectedValore);
    setPage(0);
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
    setSubActiveTab(""); // Reset the active sub-tab
    setValue(-1); // Reset the value
  };

  useEffect(() => {
    const handleReset = () => {
      handleTabChange();
    };

    window.addEventListener("tabChange", handleReset);
    return () => window.removeEventListener("tabChange", handleReset);
  }, [handleTabChange]);

  const countTab = [
    tableSubData.tabData["tab1"]?.length,
    tableSubData.tabData["tab2"]?.length,
    tableSubData.tabData["tab3"]?.length,
    tableSubData.tabData["tab4"]?.length,
  ];

  const menuTabs = ["Vendita", "Acquisto", "Generico"];

  const tabs = [
    { label: "Fattura", value: countTab[0], color: "#FFFFFF", bg: "#000" },
    {
      label: "Nota di credito",
      value: countTab[1],
      color: "#57C700",
      bg: "#57C70033",
    },
    {
      label: "Nota di debito",
      value: countTab[2],
      color: "#FFA903",
      bg: "#FFA90333",
    },
    {
      label: "Fattura proforma",
      value: countTab[3],
      color: "#DB0000",
      bg: "#DB000033",
    },
  ];

  console.log(filteredData, "filteredData");
  return (
    <>
      <Header />

      {/* <MenuTab onTabChange={handleTabChange} menuTabs={menuTabs} /> */}
      {/* <MenuLink
        setSubActiveTab={setSubActiveTab}
        value={value}
        setValue={setValue}
        tabs={tabs}
        invoice={true}
      /> */}
      <div className="pageTemplate">
        <InvoiceTab />

        {!window.location.href.includes("/acquisti/budget/sub-budget") &&
          !window.location.href.includes("/acquisti/ordini/sub-ordini") &&
          !window.location.href.includes("/vendite/budget/sub-budget") && (
            <ProductionInfo  adminiDoc={!window.location.href.includes("/amministrazione/documenti/fattura")}/>
          )}

        <SearchTable
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          tabData={data}
          onValoreFilter={handleValoreFilter}
          onSearch={handleSearch}
          applyFilters={applyFilters}
          setSearchFilters={setSearchFilters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          searchFilters={searchFilters}
          invoice={true}
        />
        {window.location.href.includes("/preventivo") && (
          <PreventivoTextEditor />
        )}
        {window.location.href.includes("/vendite/budget/sub-budget") && (
          <PreventivoTextEditor />
        )}
        {window.location.href.includes("/acquisti/budget/sub-budget") && (
          <PreventivoTextEditor />
        )}

        <div className="invoiceTable">
          <ProductTable dummyData={filteredData} columns={columns} />
        </div>
        <InvoiceTableFooter dummyData={filteredData} setFilteredData={setFilteredData} />
        <InvoiceFooter />
      </div>
    </>
  );
};

export default InvoicePage;
