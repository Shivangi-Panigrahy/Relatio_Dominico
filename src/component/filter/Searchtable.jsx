import React, { useState, useEffect, useCallback, useMemo } from "react"; // React and hooks
import { Autocomplete, Box, Grid, Stack, TextField } from "@mui/material"; // Material-UI components
import DatePickerTime from "./DatePicker"; // Date picker component
import SearchField from "./SearchField"; // Search input field
import SearchableDropdown from "./SearchableDropdown"; // Dropdown with search capability
import FilterResults from "./FilterResults"; // Component for displaying active filters
import SimpleDropdown from "./SimpleDropdown"; // Simple dropdown component
import "./Searchtable.scss"; // Custom styles
import dayjs from "dayjs";
import MenuWithOptions from "./MenuWithOptions";
const SearchTable = ({
  tabData,
  onValoreFilter,
  onSearch,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  applyFilters,
  setSearchFilters,
  activeFilters,
  setActiveFilters,
  searchFilter,
  form,
  invoice = false,
  navData,
}) => {
  const [searchTerm, setSearchTerm] = useState(""); // Current search term
  // const [activeFilters, setActiveFilters] = useState({}); // Active filters
  const [minMaxData, setMinMaxDate] = useState(null);
  const [removeDate, setRemoveDate] = useState(false);
  const options = ["Valore 1", "Valore 2"];

  // Reset all filters and call onSearch
  const resetFilters = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setSearchTerm("");
    setActiveFilters({});
    onSearch({});
  }, [onSearch, setActiveFilters]);
  // Make reset function available globally
  useEffect(() => {
    if (window.searchTableReset) {
      window.searchTableReset.current = resetFilters;
    } else {
      window.searchTableReset = { current: resetFilters };
    }
  }, [resetFilters]);
  useEffect(() => {
    if (removeDate) {
      setStartDate(null);
      setEndDate(null);
      setRemoveDate(false);
    }
  }, [removeDate, setStartDate, setEndDate]);
  // Extract unique values from the specified field
  const extractUniqueValues = useMemo(
    () => (field) => {
      if (!tabData) return [];
      const allValues = Array.isArray(tabData)
        ? tabData.map((item) => item[field])
        : Object.values(tabData)
            .flat()
            .map((item) => item[field]);
      return [...new Set(allValues.filter(Boolean))];
    },
    [tabData]
  );
  // Handle selection of filters
  const handleFilterSelect = useCallback(
    (field, value) => {
      const newFilters = { ...activeFilters, [field]: value };
      if (!value) delete newFilters[field];
      setActiveFilters(newFilters);
      onSearch({ ...newFilters, searchTerm });
    },
    [activeFilters, onSearch, searchTerm]
  );
  // Handle changes in the search input
  const handleSearchChange = useCallback(
    (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearch({ ...activeFilters, searchTerm: term });
    },
    [activeFilters, onSearch]
  );
  // Clear all filters and search term
  const handleClearAllFilters = useCallback(() => {
    setActiveFilters({});
    setSearchTerm("");
    setStartDate(null);
    setEndDate(null);
    onSearch({});
  }, [onSearch, setActiveFilters]);
  //get min and max date
  const handleMinMaxDate = useCallback((index, date) => {
    const formattedDate = dayjs(date, "DD/MM/YYYY");
    setMinMaxDate((prev) => ({
      ...prev,
      [index === 0 ? "minDate" : "maxDate"]: formattedDate,
    }));
  }, []);
  const renderFilters = () => (
    <>
      {navData === "personale" ||
      navData === "bilancio" ||
      navData === "Gruppi" ||
      navData === "product" ||
      navData === "Giacenze" ||
      navData === "distinta" ||
      navData === "conf_prodotti" ||
      navData === "lis_prodotti" ||
      navData === "stabilimenti" ||
      navData === "GiacenzeStabilimenti" ||
      navData === "mezziStabiliment" ||
      navData === "attrezzatureStabiliment" ||
      navData === "collaboratoriStablimenti" ||
      navData === "Attrezzature" ||
      navData === "Collaboratori" ||
      navData === "Mezzi" ||
      navData === "Prodotto" ||
      navData === "Semilavorati" ||
      navData === "Scarti" ||
      navData === "Sensori" ? (
        ""
      ) : (
        <>
          <DatePickerTime
            label="Data"
            value={startDate}
            minDate={null}
            maxDate={minMaxData?.minDate}
            onDateChange={(formattedDate) => {
              handleMinMaxDate(0, formattedDate);
              handleFilterSelect("StartDate", formattedDate);
              setStartDate(formattedDate);
            }}
          />
          <DatePickerTime
            label="Data"
            value={endDate}
            minDate={minMaxData?.minDate}
            maxDate={null}
            onDateChange={(formattedDate) => {
              handleMinMaxDate(1, formattedDate);
              handleFilterSelect("EndDate", formattedDate);
              setEndDate(formattedDate);
            }}
          />
        </>
      )}

      {navData === "fornitori" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("Tipo")} // Provide your unique values here
            value={activeFilters["Tipo"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("Tipo", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Tipo" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("Gruppo")} // Provide your unique values here
            value={activeFilters["Gruppo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("Gruppo", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Gruppo" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "DDT" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("fornitori")} // Provide your unique values here
            value={activeFilters["fornitori"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("fornitori", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Cliente/Fornitore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stabilimento")} // Provide your unique values here
            value={activeFilters["stabilimento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stabilimento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Stabilimento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "leed" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "allegati" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "AmministragionDocumenti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("clienti")} // Provide your unique values here
            value={activeFilters["clienti"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("clienti", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Clienti/Fornitiori" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("numero")} // Provide your unique values here
            value={activeFilters["numero"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("numero", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="numero" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "sensori" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("Tipodisensore")} // Provide your unique values here
            value={activeFilters["Tipodisensore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("Tipodisensore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipo di sensore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("Tipodirilevazione")} // Provide your unique values here
            value={activeFilters["Tipodirilevazione"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("Tipodirilevazione", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipo di rilevazione" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("TipodiPosizione")} // Provide your unique values here
            value={activeFilters["TipodiPosizione"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("TipodiPosizione", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipo di Posizione" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "AmministragioneImposte" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("anno")} // Provide your unique values here
            value={activeFilters["anno"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("anno", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="anno" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("totale")} // Provide your unique values here
            value={activeFilters["totale"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("totale", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Totale" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("saldato")} // Provide your unique values here
            value={activeFilters["saldato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("saldato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Saldato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "Turni" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nomeTurno")} // Provide your unique values here
            value={activeFilters["nomeTurno"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("nomeTurno", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Nome Turno" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "AmministragionFlussi" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("documento")} // Provide your unique values here
            value={activeFilters["documento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("documento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Documento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("clienti")} // Provide your unique values here
            value={activeFilters["clienti"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("clienti", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Clienti/Fornitori" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("entrata")} // Provide your unique values here
            value={activeFilters["entrata"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("entrata", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Entrata" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("utileContabile")} // Provide your unique values here
            value={activeFilters["utileContabile"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("utileContabile", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="UtileContabile" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipo")} // Provide your unique values here
            value={activeFilters["tipo"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("tipo", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Tipo" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("modalita")} // Provide your unique values here
            value={activeFilters["modalita"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("modalita", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Modalita" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipoRisorsa")} // Provide your unique values here
            value={activeFilters["tipoRisorsa"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipoRisorsa", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="TipoRisorsa" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nomeRisorsa")} // Provide your unique values here
            value={activeFilters["nomeRisorsa"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("nomeRisorsa", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="NomeRisorsa" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <MenuWithOptions options={options} />
        </>
      ) : navData === "AmministragionAsset" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("scadenza")} // Provide your unique values here
            value={activeFilters["scadenza"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("scadenza", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Scadenza" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("obiettivo")} // Provide your unique values here
            value={activeFilters["obiettivo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("obiettivo", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Obiettivo" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "AmministragionReteizione" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("obiettivo")} // Provide your unique values here
            value={activeFilters["obiettivo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("obiettivo", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Ricerca libera" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          {/* <MenuWithOptions options={options} /> */}
        </>
      ) : navData === "servizi" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("costoServizio")} // Provide your unique values here
            value={activeFilters["costoServizio"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("costoServizio", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="CostoServizio" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "prodotti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nomeProdotto")} // Provide your unique values here
            value={activeFilters["nomeProdotto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("nomeProdotto", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="NomeProdotto" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "listini" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("gruppiAssociati")} // Provide your unique values here
            value={activeFilters["gruppiAssociati"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("gruppiAssociati", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="GruppiAssociati" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "repository" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("peso")} // Provide your unique values here
            value={activeFilters["peso"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("peso", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Peso" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "personale" ||
        navData === "bilancio" ||
        navData === "Gruppi" ||
        navData === "product" ||
        navData === "conf_prodotti" ||
        navData === "lis_prodotti" ||
        navData === "Attrezzature" ||
        navData === "Collaboratori" ||
        navData === "Mezzi" ||
        navData === "Prodotto" ||
        navData === "Semilavorati" ||
        navData === "Scarti" ||
        navData === "Sensori" ? (
        <></>
      ) : navData === "documenti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("valore")} // Provide your unique values here
            value={activeFilters["valore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("valore", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Valore" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("numero")} // Provide your unique values here
            value={activeFilters["numero"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("numero", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Numero" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "candidati" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("candidato")} // Provide your unique values here
            value={activeFilters["candidato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("candidato", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Candidato" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("livello")} // Provide your unique values here
            value={activeFilters["livello"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("livello", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Livello" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("ruolo")} // Provide your unique values here
            value={activeFilters["ruolo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("ruolo", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Ruolo" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "busta" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("numero")} // Provide your unique values here
            value={activeFilters["numero"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("numero", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Numero" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("mese")} // Provide your unique values here
            value={activeFilters["mese"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("mese", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Mese" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("collaboratore")} // Provide your unique values here
            value={activeFilters["collaboratore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("collaboratore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Collaboratore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("totale")} // Provide your unique values here
            value={activeFilters["totale"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("totale", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Totale" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "feriePermisse" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("evento")} // Provide your unique values here
            value={activeFilters["evento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("evento", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Evento" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("colaboratore")} // Provide your unique values here
            value={activeFilters["colaboratore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("colaboratore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Colaboratore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "turni" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("turno")} // Provide your unique values here
            value={activeFilters["turno"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("turno", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Turno" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("ore")} // Provide your unique values here
            value={activeFilters["ore"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("ore", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Ore" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "colaboratory" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("colaboratore")} // Provide your unique values here
            value={activeFilters["colaboratore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("colaboratore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Colaboratore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("ruolo")} // Provide your unique values here
            value={activeFilters["ruolo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("ruolo", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Ruolo" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("trattamento")} // Provide your unique values here
            value={activeFilters["trattamento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("trattamento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Trattamento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "stabilimenti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologia")} // Provide your unique values here
            value={activeFilters["tipologia"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologia", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "attrezzature" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologiaAttrezzature")} // Provide your unique values here
            value={activeFilters["tipologiaAttrezzature"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologiaAttrezzature", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia Attrezzature" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("posizione")} // Provide your unique values here
            value={activeFilters["posizione"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("posizione", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Posizione" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "progetti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nomeProgetto")} // Provide your unique values here
            value={activeFilters["nomeProgetto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("nomeProgetto", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Nome Progetto" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("totaleOreLavorate")} // Provide your unique values here
            value={activeFilters["totaleOreLavorate"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("totaleOreLavorate", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Totale OreLavorate" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "giacenze" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("prodotto")} // Provide your unique values here
            value={activeFilters["prodotto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("prodotto", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Prodotto" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("marcaSerie")} // Provide your unique values here
            value={activeFilters["marcaSerie"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("marcaSerie", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Marca Serie" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stabilimento")} // Provide your unique values here
            value={activeFilters["stabilimento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stabilimento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Stabilimento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "mezzi" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipologiaMezzo")} // Provide your unique values here
            value={activeFilters["tipologiaMezzo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipologiaMezzo", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipologia Mezzo" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("posizione")} // Provide your unique values here
            value={activeFilters["posizione"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("posizione", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Posizione" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("targhe")} // Provide your unique values here
            value={activeFilters["targhe"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("targhe", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Targhe" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <MenuWithOptions options={options} />
        </>
      ) : navData === "GiacenzeStabilimenti" ||
        navData === "attrezzatureStabiliment" ||
        navData === "mezziStabiliment" ||
        navData === "collaboratoriStablimenti" ? (
        <>
          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "distinta" ? (
        <>
          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "Giacenze" ? (
        <>
          <SearchField value={searchTerm} onChange={handleSearchChange} />
        </>
      ) : navData === "Productions" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("prodotto")} // Provide your unique values here
            value={activeFilters["prodotto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("prodotto", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Prodotto" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("fase")} // Provide your unique values here
            value={activeFilters["fase"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("fase", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Fase" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stabilimento")} // Provide your unique values here
            value={activeFilters["stabilimento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stabilimento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Stabilimento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "Processi" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("prodottofinale")} // Provide your unique values here
            value={activeFilters["prodottofinale"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("prodottofinale", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Prodotto" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("processo")} // Provide your unique values here
            value={activeFilters["processo"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("processo", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Fase" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "Archive" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("prodotto")} // Provide your unique values here
            value={activeFilters["prodotto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("prodotto", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Prodotto" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("fase")} // Provide your unique values here
            value={activeFilters["fase"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("fase", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Fase" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stabilimento")} // Provide your unique values here
            value={activeFilters["stabilimento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stabilimento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Stabilimento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "attivita_progetti" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nomeProgetto")} // Provide your unique values here
            value={activeFilters["nomeProgetto"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("nomeProgetto", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Nome Progetto" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("teamLeader")} // Provide your unique values here
            value={activeFilters["teamLeader"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("teamLeader", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Team Leader" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stato")} // Provide your unique values here
            value={activeFilters["stato"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stato", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="stato" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />

          <SearchField value={searchTerm} onChange={handleSearchChange} />
          <MenuWithOptions options={options} />
        </>
      ) : navData === "Automatico" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("categoria")} // Provide your unique values here
            value={activeFilters["categoria"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("categoria", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Categoria" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("nome")} // Provide your unique values here
            value={activeFilters["nome"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("nome", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Nome" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("stabilimento")} // Provide your unique values here
            value={activeFilters["stabilimento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("stabilimento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Stabilimento" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("valore")} // Provide your unique values here
            value={activeFilters["valore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("valore", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Valore" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("numero")} // Provide your unique values here
            value={activeFilters["numero"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("numero", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Numero" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <SearchField value={searchTerm} onChange={handleSearchChange} />

          <MenuWithOptions options={options} />
        </>
      )}
      {form !== "form1" || (
        <div style={{ marginTop: "5px" }}>
          {(navData === "personale" ||
            navData === "repository" ||
            navData === "leed") && <MenuWithOptions options={options} />}
        </div>
      )}
    </>
  );
  const renderInvoiceFilters = () => (
    <>
      <DatePickerTime
        label="Data"
        value={startDate}
        minDate={null}
        maxDate={minMaxData?.minDate}
        onDateChange={(formattedDate) => {
          handleMinMaxDate(0, formattedDate);
          handleFilterSelect("StartDate", formattedDate);
          setStartDate(formattedDate);
        }}
      />
      <SearchableDropdown
        label={"Numerazione"}
        items={extractUniqueValues("valore")}
        value={activeFilters["valore"] || ""}
        onSelect={(value) => handleFilterSelect("valore", value)}
      />
      <SearchableDropdown
        label={"Centri di ricavo"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
      <SearchableDropdown
        label={"Progetto"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
      <SearchableDropdown
        label={"Input"}
        items={extractUniqueValues("valore")}
        value={activeFilters["valore"] || ""}
        onSelect={(value) => handleFilterSelect("valore", value)}
      />
      <SearchableDropdown
        label={"Cliente"}
        items={extractUniqueValues("numero")}
        value={activeFilters["numero"] || ""}
        onSelect={(value) => handleFilterSelect("numero", value)}
      />
    </>
  );

  console.log("Nav", navData);

  return (
    <Box
      className={
        navData === "personale" ||
        navData === "bilancio" ||
        navData === "Gruppi" ||
        navData === "product" ||
        navData === "conf_prodotti" ||
        navData === "lis_prodotti" ||
        navData === "Attrezzature" ||
        navData === "Collaboratori" ||
        navData === "Mezzi" ||
        navData === "Prodotto" ||
        navData === "Semilavorati" ||
        navData === "Scarti" ||
        navData === "Sensori"
          ? ""
          : `
      ${
        window.location.pathname === "/vendite/ordini/sub-ordini"
          ? ""
          : `
        ${invoice ? "invoiceFilter fattura" : "invoiceFilter"}
        ${navData === "leed" ? "leadInvoiceFilter" : ""}
        ${navData === "repository" ? "repoInvoiceFilter" : ""}
        ${navData === "budget" ? "budgetInvoiceFilter" : ""}
        ${navData === "ordini" ? "ordiniInvoiceFilter" : ""}
        ${navData === "fornitori" ? "fornitoriInvoiceFilter" : ""}
        ${navData === "preventivi" ? "fornitoriInvoiceFilter" : ""}
        ${navData === "allegati" ? "allegatiInvoiceFilter" : ""}
        ${navData === "candidati" ? "candidatiInvoiceFilter" : ""}
        ${navData === "distinta" ? "distintaInvoiceFilter" : ""}
        ${navData === "Giacenze" ? "giacenzeInvoiceFilter" : ""}
        ${navData === "colaboratory" ? "colaboratoryInvoiceFilter" : ""}
        ${navData === "prodotti" ? "colaboratoryInvoiceFilter" : ""}
         ${navData === "giacenze" ? "colaboratoryInvoiceFilter" : ""}
         ${navData === "mezzi" ? "invoiceFilter" : ""}
          ${navData === "Truni" ? "colaboratoryInvoiceFilter" : ""}
         ${navData === "Automatico" ? "invoiceFilter" : ""}
            ${navData === "attivita_progetti" ? "colaboratoryInvoiceFilter" : ""}
          ${
            navData === "GiacenzeStabilimenti"
              ? "distintaInvoiceFilter gaicenzeInvoiceFilter"
              : ""
          }
                 ${navData === "Productions" ? "colaboratoryInvoiceFilter" : ""}
          ${
            navData === "mezziStabiliment"
              ? "distintaInvoiceFilter gaicenzeInvoiceFilter"
              : ""
          }
                 ${
                   navData === "collaboratoriStablimenti"
                     ? "distintaInvoiceFilter gaicenzeInvoiceFilter"
                     : ""
                 }
                  ${
                    navData === "attrezzatureStabiliment"
                      ? "distintaInvoiceFilter gaicenzeInvoiceFilter"
                      : ""
                  }
        ${navData === "AmministragionDocumenti" ? "fornitoriInvoiceFilter" : ""}
      `
      }
    `
      }
    >
      <Stack spacing={2}>
        {form === "form1" ? (
          <>{renderFilters()}</>
        ) : (
          <>
            {window.location.pathname === "/vendite/ordini/sub-ordini"
              ? null
              : invoice
              ? renderInvoiceFilters()
              : renderFilters()}
          </>
        )}
      </Stack>
      {(window.location.href.includes("/vendite/budget/sub-budget") ||
        window.location.href.includes("/acquisti/budget/sub-budget") ||
        window.location.href.includes("/acquisti/budget/sub-budget")) && (
        <Autocomplete
          sx={{ marginTop: "14px !important" }}
          disablePortal
          options={extractUniqueValues("valore")} // Provide your unique values here
          value={activeFilters["valore"] || ""} // Set the selected value
          onChange={(event, newValue) => handleFilterSelect("valore", newValue)} // Update the selected value
          renderInput={(params) => (
            <TextField {...params} label="Titolo del preventivo" />
          )} // Customize the label
        />
      )}
    </Box>
  );
};
export default SearchTable;
