import React, { useState } from "react";
import RevenueLineChart from "../../component/LineChart/LineChart";
import SearchTable from "../../component/filter/Searchtable";
import ProfittiStatitics from "../../component/profittiStatitics/profittiStatitics";
import Header from "../../component/header/Header";
import MenuTab from "../../component/tabs/MenuTab";
import dayjs from "dayjs";

import Table from "../../component/table/Table";
import tableData from "../../utils/personaleData.json";

const dataset = [
  { month: "Gen", entrate: 5, uscite: 25, ricavo: 42 },
  { month: "Feb", entrate: 8, uscite: 28, ricavo: 45 },
  { month: "Mar", entrate: 12, uscite: 35, ricavo: 50 },
  { month: "Apr", entrate: 25, uscite: 48, ricavo: 62 },
  { month: "Mag", entrate: 42, uscite: 62, ricavo: 78 },
  { month: "Giu", entrate: 45, uscite: 65, ricavo: 82 },
  { month: "Lug", entrate: 45, uscite: 65, ricavo: 82 },
  { month: "Ago", entrate: 80, uscite: 68, ricavo: 85 },
  { month: "Set", entrate: 58, uscite: 80, ricavo: 95 },
  { month: "Ott", entrate: 62, uscite: 82, ricavo: 98 },
  { month: "Nov", entrate: 52, uscite: 72, ricavo: 88 },
  { month: "Dic", entrate: 100, uscite: 55, ricavo: 68 },
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
const venditeData = [
  {
    status: "I Trimestre",
    count: 8.2,
    amount: "29.043.55€",
    color: "#160A2A",
    label: "Anno precedente",
    statusColor: "#E72276",
  },
  {
    status: "II Trimestre",
    count: 8.2,
    amount: "30.043.55€",
    color: "#160A2A",
    label: "Anno precedente",
    statusColor: "#E72276",
  },
  {
    status: "III Trimestre",
    count: 8.2,
    amount: "55.043.55€",
    color: "#160A2A",
    label: "Anno precedente",
    statusColor: "#E72276",
  },
  {
    status: "IV Trimestre",
    count: 8.2,
    amount: "150.043.55€",
    color: "#160A2A",
    label: "Anno precedente",
    statusColor: "#E72276",
  },
  {
    status: "Totale Preventivi",
    count: 8.2,
    amount: "350.043.55€",
    color: "#57C700",
    label: "Anno precedente",
    statusColor: "#E72276",
  },
  {
    status: "Accettati",
    count: 8.2,
    amount: "350.043.55€",
    color: "#100919",
    label: "Conversione",
    backgroundColor: "#57C7001A",
    statusColor: "#160A2A",
    isHighlighted: true,
  },
  {
    status: "Sospesi",
    count: 8.2,
    amount: "350.043.55€",
    color: "#100919",
    label: "Conversione",
    backgroundColor: "#FFA90333",
    statusColor: "#160A2A",
    isHighlighted: true,
  },
  {
    status: "Rifiutati",
    count: 8.2,
    amount: "350.043.55€",
    color: "#100919",
    label: "Conversione",
    backgroundColor: "#DB000033",
    statusColor: "#160A2A",
    isHighlighted: true,
  },
];
const dataFilter = [
  {
    id: "Valore preventivi",
    label: "Valore preventivi",
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

const Vendite = () => {
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
    // setPage(0);
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
        <ProfittiStatitics
          dataType={venditeData}
          type={true}
          isProfitti={false}
        />

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
          data={"vendite"}
          dataset={dataset}
          dataFilter={dataFilter}
          series={series}
        />
         <Table data={tableData} columns={columns} navData={"personale"} />
      </div>
    </>
  );
};

export default Vendite;
