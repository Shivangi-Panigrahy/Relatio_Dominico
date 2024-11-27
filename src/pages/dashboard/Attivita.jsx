import React, { useState } from "react";
import RevenueLineChart from "../../component/LineChart/LineChart";
import SearchTable from "../../component/filter/Searchtable";
import ProfittiStatitics from "../../component/profittiStatitics/profittiStatitics";
import Header from "../../component/header/Header";
import MenuTab from "../../component/tabs/MenuTab";
import dayjs from "dayjs";
import tableData from "../../utils/personaleData.json";
import Table from "../../component/table/Table";
import AttivitaData from "../../component/AttivitaData/AttivitaData";

const dataset = [
  { month: "Gen", Sviluppo: 5, Immobili: 25, Investimenti: 42 },
  { month: "Feb", Sviluppo: 8, Immobili: 28, Investimenti: 45 },
  { month: "Mar", Sviluppo: 12, Immobili: 35, Investimenti: 50 },
  { month: "Apr", Sviluppo: 25, Immobili: 48, Investimenti: 62 },
  { month: "Mag", Sviluppo: 42, Immobili: 62, Investimenti: 78 },
  { month: "Giu", Sviluppo: 45, Immobili: 65, Investimenti: 82 },
  { month: "Lug", Sviluppo: 45, Immobili: 65, Investimenti: 82 },
  { month: "Ago", Sviluppo: 80, Immobili: 68, Investimenti: 85 },
  { month: "Set", Sviluppo: 58, Immobili: 80, Investimenti: 95 },
  { month: "Ott", Sviluppo: 62, Immobili: 82, Investimenti: 98 },
  { month: "Nov", Sviluppo: 52, Immobili: 72, Investimenti: 88 },
  { month: "Dic", Sviluppo: 100, Immobili: 55, Investimenti: 68 },
];


const dataFilter = [
  {
    id: "Sviluppo",
    label: "Sviluppo",
    value: "€16.19k",
    color: "black",
    action: "Entrate",
  },
  {
    id: "Immobili",
    label: "Immobili",
    value: "€16.19k",
    color: "black",
    action: "Entrate",
  },
  {
    id: "Investimenti",
    label: "Investimenti",
    value: "€16.19k",
    color: "black",
    action: "Entrate",
  },
];



const dataPie = [
  { id: 1, value: 35, color: "#3A0CA3", type: "Siti web", message: "Tipologia di Attività" },
  { id: 2, value: 5, color: "#4AAFF0", type: "Sviluppo software", message: "Tipologia di Attività" },
  { id: 3, value: 15, color: "#160A2A", type: "Configuratore", message: "Tipologia di Attività" },
  { id: 4, value: 45, color: "#E72276", type: "Relatio erp", message: "Tipologia di Attività" },
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
const series = [
  {
    dataKey: "Sviluppo",
    color: "green",
    showMark: true,
  },
  {
    dataKey: "Immobili",
    color: "#f44336",
    showMark: true,
  },
  {
    dataKey: "Investimenti",
    color: "#000000",
    showMark: true,
  },
];
const Attivita = () => {
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
        <MenuTab
          onTabChange={handleTabChange}
          statsDashboard={true}
          vendite={true}
        />

        {/* Statistics row */}
        <AttivitaData />

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
          data={"asset"}
          dataFilter={dataFilter}
          dataPie={dataPie}
          series={series}
        />
        <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};

export default Attivita;
