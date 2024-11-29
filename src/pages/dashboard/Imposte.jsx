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
  { month: "Gen", IVA: 5, IRAP: 25, Contributi: 42 },
  { month: "Feb", IVA: 8, IRAP: 28, Contributi: 45 },
  { month: "Mar", IVA: 12, IRAP: 35, Contributi: 50 },
  { month: "Apr", IVA: 25, IRAP: 48, Contributi: 62 },
  { month: "Mag", IVA: 42, IRAP: 62, Contributi: 78 },
  { month: "Giu", IVA: 45, IRAP: 65, Contributi: 82 },
  { month: "Lug", IVA: 45, IRAP: 65, Contributi: 82 },
  { month: "Ago", IVA: 80, IRAP: 68, Contributi: 85 },
  { month: "Set", IVA: 58, IRAP: 80, Contributi: 95 },
  { month: "Ott", IVA: 62, IRAP: 82, Contributi: 98 },
  { month: "Nov", IVA: 52, IRAP: 72, Contributi: 88 },
  { month: "Dic", IVA: 100, IRAP: 55, Contributi: 68 },
];

const dataFilter = [
  {
    id: "IVA",
    label: "IVA",
    value: "€16.19k",
    color: "#100919",
    action: "Entrate",
  },
  {
    id: "IRAP",
    label: "IRAP",
    value: "€35.71k",
    color: "#100919",
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
  {
    id: 1,
    value: 35,
    color: "#160A2A",
    type: "IVA",
    message: "Tipologia di imposte",
  },
  { id: 3, value: 5, color: "#4AAFF0", type: "IRAP" },
  { id: 2, value: 15, color: "#3A0CA3", type: "Contributi" },
  { id: 0, value: 45, color: "#E72276", type: "IRES" },
];
const imposteData = [
  {
    status: "I Trimestre",
    count: 8.2,
    amount: "29.043,55€",
    color: "#160A2A",
    statusColor: "#160A2A",
  },
  {
    status: "II Trimestre",
    count: 8.2,
    amount: "30.043,55€",
    color: "#160A2A",
    statusColor: "#160A2A",
  },
  {
    status: "III Trimestre",
    count: 8.2,
    amount: "55.043,55€",
    color: "#160A2A",
    statusColor: "#160A2A",
  },
  {
    status: "IV Trimestre",
    count: 8.2,
    amount: "150.043,55€",
    color: "#160A2A",
    statusColor: "#160A2A",
  },
  {
    status: "Totale imposte",
    count: 8.2,
    amount: "-350.043.55€",
    color: "#DB0000",
    isHighlighted: true,
    statusColor: "#160A2A",
    backgroundColor: "#DB000033",
  },
  {
    status: "IVA",
    matured: "325.344.211,40€",
    due: "320.203.321€",
    color: "black",
    message: "Maturata",
    message2: "Maturata",
    statusColor: "#160A2A",
    customStructure: true,
  },
  {
    status: "Flusso IVA",
    matured: "325.344.211,40€",
    due: "320.203.321€",
    color: "black",
    message: "Maturata",
    message2: "Maturata",
    statusColor: "#160A2A",
    customStructure: true,
  },
];
const series = [
  {
    dataKey: "IVA",
    color: "#4CAF50",
    showMark: true,
  },
  {
    dataKey: "IRAP",
    color: "#f44336",
    showMark: true,
  },
  {
    dataKey: "Contributi",
    color: "#000000",
    showMark: true,
  },
];

const Imposte = () => {
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
        <ProfittiStatitics dataType={imposteData} type={false} seven={true} />

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
          series={series}
        />
        <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};

export default Imposte;
