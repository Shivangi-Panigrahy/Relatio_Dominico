import React, { useState } from "react";
import RevenueLineChart from "../../component/LineChart/LineChart";
import SearchTable from "../../component/filter/Searchtable";
import ProfittiStatitics from "../../component/profittiStatitics/profittiStatitics";
import Header from "../../component/header/Header";
import { Outlet } from "react-router-dom";
import MenuTab from "../../component/tabs/MenuTab";
import Table from "../../component/table/Table";
import tableData from "../../utils/personaleData.json";
const dataset = [
  { month: "Gen", entrate: 5 },
  { month: "Feb", entrate: 8 },
  { month: "Mar", entrate: 12 },
  { month: "Apr", entrate: 25 },
  { month: "Mag", entrate: 42 },
  { month: "Giu", entrate: 45 },
  { month: "Lug", entrate: 45 },
  { month: "Ago", entrate: 48 },
  { month: "Set", entrate: 58 },
  { month: "Ott", entrate: 62 },
  { month: "Nov", entrate: 52 },
  { month: "Dic", entrate: 35 },
];

const personaleData = [
  {
    status: "I Trimestre",
    count: 8.2,
    amount: "29.043.55€",
    color: "black",
  },
  {
    status: "II Trimestre",
    count: 8.2,
    amount: "30.043.55€",
    color: "black",
  },
  {
    status: "III Trimestre",
    count: 8.2,
    amount: "55.043.55€",
    color: "black",
  },
  {
    status: "IV Trimestre",
    count: 8.2,
    amount: "150.043.55€",
    color: "black",
  },
  {
    status: "Totale Stipendi",
    count: 8.2,
    amount: "-350.043.55€",
    color: "red",
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
const Personale = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeFilters, setActiveFilters] = useState({});
  const [searchFilters, setSearchFilters] = useState({});
  const [activeSubTab, setSubActiveTab] = useState("");
  const [value, setValue] = React.useState(-1);
  const handleValoreFilter = (selectedValore) => {
    setValoreFilter(selectedValore);
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
    setFilteredData(result);
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
        <RevenueLineChart data={"personale"} dataset={dataset} />
        <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};
export default Personale;
