import Header from "../../../component/header/Header";
import RevenueLineChart from "../../../component/LineChart/LineChart";
import Table from "../../../component/table/Table";

const columns = [
  { field: "doc", headerName: "Doc", width: 64 },
  { field: "creatoIl", headerName: "Creato il", width: 92 },
  { field: "anno", headerName: "Anno", width: 92 },
  { field: "bilancio", headerName: "Bilancio", width: 1115 },
  { field: "autore", headerName: "Autore", width: 84 },
  { field: "modDa", headerName: "Mod. da", width: 84 },
  { field: "fatturato", headerName: "Fatturato", width: 118 },
  { field: "azioni", headerName: "Azioni", width: 93 },
];
const rows = [
  {
    id: 1,
    doc: "Doc",
    creatoIl: "28/11/2022",
    anno: 2022,
    bilancio: "Azienda cliente srl",
    autore: "Author Image 1",
    modDa: "Author Image 1",
    fatturato: "129.123.334,00€",
    azioni: "...",
  },
  {
    id: 2,
    doc: "Doc",
    creatoIl: "28/11/2022",
    anno: 2022,
    bilancio: "Azienda cliente srl",
    autore: "Author Image 2",
    modDa: "Author Image 2",
    fatturato: "129.123.334,00€",
    azioni: "...",
  },
  {
    id: 3,
    doc: "Doc",
    creatoIl: "28/11/2022",
    anno: 2022,
    bilancio: "Azienda cliente srl",
    autore: "Author Image 3",
    modDa: "Author Image 3",
    fatturato: "129.123.334,00€",
    azioni: "...",
  },
  {
    id: 4,
    doc: "Doc",
    creatoIl: "28/11/2022",
    anno: 2022,
    bilancio: "Azienda cliente srl",
    autore: "Author Image 4",
    modDa: "Author Image 4",
    fatturato: "129.123.334,00€",
    azioni: "...",
  },
  {
    id: 5,
    doc: "Doc",
    creatoIl: "28/11/2022",
    anno: 2022,
    bilancio: "Azienda cliente srl",
    autore: "Author Image 5",
    modDa: "Author Image 5",
    fatturato: "129.123.334,00€",
    azioni: "...",
  },
];

const dataset = [
  { month: "2017", entrate: 5 },
  { month: "2018", entrate: 8 },
  { month: "2019", entrate: 12 },
  { month: "2020", entrate: 25 },
  { month: "2021", entrate: 42 },
  { month: "2022", entrate: 45 },
  { month: "2023", entrate: 45 },
  { month: "2024", entrate: 60 },
  { month: "2025", entrate: 58 },
  { month: "2026", entrate: 62 },
  { month: "2027", entrate: 52 },
  { month: "2028", entrate: 38 },
];

// const dataFilter = [];
const series = [
  {
    dataKey: "entrate",
    color: "#57C700",
    // showMark: true,
  },
];

const AmministrazioneBilancio = () => {
  return (
    <>
      <Header />
      <div className="pageTemplate">
        <RevenueLineChart data={"bilancio"} dataset={dataset} series={series} />

        <Table data={rows} columns={columns} navData={"bilancio"} />
      </div>
    </>
  );
};

export default AmministrazioneBilancio;
