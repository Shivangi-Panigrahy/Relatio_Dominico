import React, { useState } from "react";
import RevenueLineChart from "../../component/LineChart/LineChart";
import SearchTable from "../../component/filter/Searchtable";
import ProfittiStatitics from "../../component/profittiStatitics/profittiStatitics";
import Header from "../../component/header/Header";
import MenuTab from "../../component/tabs/MenuTab";
import dayjs from "dayjs";
import tableData from "../../utils/personaleData.json";
import Table from "../../component/table/Table";

const dataset = [
  { month: "Gen", entrate: 5, uscite: 25, ricavo: 42 },
  { month: "Feb", entrate: 8, uscite: 28, ricavo: 45 },
  { month: "Mar", entrate: 12, uscite: 35, ricavo: 50 },
  { month: "Apr", entrate: 25, uscite: 48, ricavo: 62 },
  { month: "Mag", entrate: 42, uscite: 62, ricavo: 78 },
  { month: "Giu", entrate: 45, uscite: 65, ricavo: 82 },
  { month: "Lug", entrate: 45, uscite: 65, ricavo: 82 },
  { month: "Ago", entrate: 48, uscite: 68, ricavo: 85 },
  { month: "Set", entrate: 58, uscite: 80, ricavo: 95 },
  { month: "Ott", entrate: 62, uscite: 82, ricavo: 98 },
  { month: "Nov", entrate: 52, uscite: 72, ricavo: 88 },
  { month: "Dic", entrate: 35, uscite: 55, ricavo: 68 },
];
const dataFilter = [
  {
    id: "IVA",
    label: "IVA",
    value: "€16.19k",
    color: "#4CAF50",
    action: "Entrate",
  },
  {
    id: "IRAP",
    label: "IRAP",
    value: "€35.71k",
    color: "#DB0000",
    action: "Uscite",
  },
  {
    id: "Contributi",
    label: "Contributi",
    value: "€35.71k",
    color: "#100919",
    action: "Ricavo",
  },
];
const columns = [
  { field: "nome", headerName: "Nome", width: 400 },
  {
    field: "gennaio",
    headerName: "Gennaio",
    width: 120,
  },
  {
    field: "febbraio",
    headerName: "Febbraio",
    width: 120,
  },
  {
    field: "marzo",
    headerName: "Marzo",
    width: 120,
  },
  {
    field: "aprile",
    headerName: "Aprile",
    width: 120,
  },
  {
    field: "maggio",
    headerName: "Maggio",
    width: 120,
  },
  {
    field: "giugno",
    headerName: "Giugno",
    width: 120,
  },
  {
    field: "luglio",
    headerName: "Luglio",
    width: 120,
  },
  {
    field: "agosto",
    headerName: "Agosto",
    width: 120,
  },
  {
    field: "settembre",
    headerName: "Settembre",
    width: 120,
  },
  {
    field: "ottobre",
    headerName: "Ottobre",
    width: 120,
  },
  {
    field: "novembre",
    headerName: "Novembre",
    width: 120,
  },
  {
    field: "dicembre",
    headerName: "Dicembre",
    width: 120,
  },
];

const dataPie = [
  { id: 1, value: 35, color: "#E72276" },
  { id: 3, value: 5, color: "#FF4D4D" },
  { id: 2, value: 15, color: "#0073B7" },
  { id: 0, value: 45, color: "#E72276" },
];
const imposteData = [
  {
    status: "I Trimestre",
    count: 8.2,
    amount: "29.043,55€",
    color: "black",
  },
  {
    status: "II Trimestre",
    count: 8.2,
    amount: "30.043,55€",
    color: "black",
  },
  {
    status: "III Trimestre",
    count: 8.2,
    amount: "55.043,55€",
    color: "black",
  },
  {
    status: "IV Trimestre",
    count: 8.2,
    amount: "150.043,55€",
    color: "black",
  },
  {
    status: "Totale imposte",
    count: 8.2,
    amount: "350.043,56€",
    color: "red",
    background: "red",
  },
  {
    status: "IVA",
    matured: "325.344.211,40€",
    due: "320.203.321€",
    color: "black",
    message: "Maturata",
    message2: "Maturata",
  },
  {
    status: "Flusso IVA",
    matured: "325.344.211,40€",
    due: "320.203.321€",
    color: "black",
    message: "Maturata",
    message2: "Maturata",
  },
];

const Imposte = ({ data }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeFilters, setActiveFilters] = useState({});
  const [searchFilters, setSearchFilters] = useState({});
  const [activeSubTab, setSubActiveTab] = useState("");
  const [value, setValue] = React.useState(-1);
  const [filteredData, setFilteredData] = useState(data);
  const [valoreFilter, setValoreFilter] = useState("");
  const [page, setPage] = useState(5);
  const data = [];

  const handleValoreFilter = (selectedValore) => {
    // setValoreFilter(selectedValore);
    setPage(0);
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  const applyFilters = () => {
    let result = data;

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

    if (searchFilters.StartDate && searchFilters.EndDate) {
      const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY");
      const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY");

      if (startDate.isValid() && endDate.isValid()) {
        result = result?.filter((item) => {
          const itemDate = dayjs(item?.data, "DD/MM/YYYY");
          return (
            itemDate.isValid() &&
            itemDate.isBetween(startDate, endDate, null, "[]")
          );
        });
      }
    }

    if (searchFilters.valore) {
      result = result.filter((item) => item.valore === searchFilters.valore);
    }
    if (searchFilters.numero) {
      result = result.filter(
        (item) => item.numero === parseInt(searchFilters.numero)
      );
    }

    if (searchFilters.stato) {
      result = result.filter((item) => item.stato === searchFilters.stato);
    }
    if (searchFilters.clienti) {
      result = result.filter((item) => item.clienti === searchFilters.clienti);
    }

    // setFilteredData(result);
    setPage(0);
  };
  const handleTabChange = (newTab) => {
    setActiveTab(newTab); // Update the active tab
    setSubActiveTab(""); // Reset the active sub-tab
    setValue(-1); // Reset the value
  };

  return (
    <>
      <Header />
      <div className="pageTemplate">
        <MenuTab onTabChange={handleTabChange} statsDashboard={true} vendite={true} />
     

        {/* Statistics row */}
        <ProfittiStatitics dataType={imposteData} />

        <SearchTable
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onValoreFilter={handleValoreFilter}
          onSearch={handleSearch}
          applyFilters={applyFilters}
          setSearchFilters={setSearchFilters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          searchFilters={searchFilters}
        />

        <RevenueLineChart
          dataset={dataset}
          data={"imposte"}
          dataFilter={dataFilter}
          dataPie={dataPie}
        />
        <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};

export default Imposte;
