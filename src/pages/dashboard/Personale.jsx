import React, { useState } from "react";
import RevenueLineChart from "../../component/LineChart/LineChart";
import SearchTable from "../../component/filter/Searchtable";
import ProfittiStatitics from "../../component/profittiStatitics/profittiStatitics";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import MenuTab from "../../component/tabs/MenuTab";
import Table from "../../component/table/Table";
import tableData from "../../utils/personaleData.json";
import dayjs from "dayjs";

const dataset = [
  { month: "Gen", entrate: 20 },
  { month: "Feb", entrate: 40 },
  { month: "Mar", entrate: 60 },
  { month: "Apr", entrate: 80 },
  { month: "Mag", entrate: 100 },
  { month: "Giu", entrate: 80 },
  { month: "Lug", entrate: 100 },
  { month: "Ago", entrate: 80 },
  { month: "Set", entrate: 60 },
  { month: "Ott", entrate: 80 },
  { month: "Nov", entrate: 100 },
  { month: "Dic", entrate: 80 },
];

const dataPie = [
  { id: 1, value: 35, color: "#E72276", type: "IVA" },
  { id: 3, value: 5, color: "#FF4D4D", type: "IRAP" },
  { id: 2, value: 15, color: "#0073B7", type: "Contributi" },
  { id: 0, value: 45, color: "#E72276", type: "IRES" },
];

const personaleData = [
  {
    status: "I Trimestre",
    count: 8.2,
    amount: "29.043.55€",
    color: "#160A2A",
    backgroundColor: "#fff",
    statusColor: '#E72276'
  },
  {
    status: "II Trimestre",
    count: 8.2,
    amount: "30.043.55€",
    color: "#160A2A",
    backgroundColor: "#fff",
    statusColor: '#E72276'
  },
  {
    status: "III Trimestre",
    count: 8.2,
    amount: "55.043.55€",
    color: "#160A2A",
    backgroundColor: "#fff",
    statusColor: '#E72276'
  },
  {
    status: "IV Trimestre",
    count: 8.2,
    amount: "150.043.55€",
    color: "#160A2A",
    backgroundColor: "#fff",
    statusColor: '#E72276'
  },
  {
    status: "Totale Stipendi",
    count: 8.2,
    amount: "-350.043.55€",
    color: "#160A2A",
    backgroundColor: "#DB000033",
    statusColor: '#E72276'
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

const dataFilter = [
  {
    id: "Buste paga",
    label: "Buste paga",
    value: "€16.19k",
    color: "#4CAF50",
    action: "Entrate",
  },
];
const series = [
  {
    dataKey: "entrate",
    color: "#4CAF50",
    showMark: true,
  },
  {
    dataKey: "uscite",
    color: "#f44336",
    showMark: true,
  },
  {
    dataKey: "ricavo",
    color: "#000000",
    showMark: true,
  },
];

const Personale = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeFilters, setActiveFilters] = useState({});
  const [searchFilters, setSearchFilters] = useState({});
  const [activeSubTab, setSubActiveTab] = useState("");
  const [value, setValue] = React.useState(-1);
  const [filteredData, setFilteredData] = useState([]);
  const [valoreFilter, setValoreFilter] = useState("");
  const [page, setPage] = useState(5);
  const handleValoreFilter = (selectedValore) => {
    // setValoreFilter(selectedValore);
    setPage(0);
  };
  const data = [];
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
    setActiveTab(newTab);
    setSubActiveTab("");
    setValue(-1);
  };
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <MenuTab onTabChange={handleTabChange} statsDashboard={true} />
        {/* Statistics row */}
        <ProfittiStatitics dataType={personaleData} />
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
          data={"personale"}
          dataset={dataset}
          dataFilter={dataFilter}
          dataPie={dataPie}
          series={series}
        />
        <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};
export default Personale;
