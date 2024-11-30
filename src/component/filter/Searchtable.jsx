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
      {navData === "personale"|| navData === "bilancio" ? (
        ""
      ) : navData === "colaboratory" ||
        navData === "turni" ||
        navData === "progetti" ||
        navData === "feriePermisse" ||
        navData === "candidati" ||
        navData === "equipagiamento" ? (
        <>
          <DatePickerTime
            label="Dal"
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
            label="Al"
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
          <Autocomplete
            disablePortal
            options={extractUniqueValues("ragioneSociale")} // Provide your unique values here
            value={activeFilters["ragioneSociale"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("ragioneSociale", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Ragione Sociale" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
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
          <Autocomplete
            disablePortal
            options={extractUniqueValues("peso")} // Provide your unique values here
            value={activeFilters["peso"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("peso", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Peso" />} // Customize the label
          // sx={{ width: 300 }} // Optional styling
          />
          <SearchField
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <MenuWithOptions options={options} />
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
            renderInput={(params) => (
              <TextField {...params} label="numero" />
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
          <SearchField
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <MenuWithOptions options={options} />
        </>) : navData === "AmministragioneImposte" ? (
          <>
            <Autocomplete
              disablePortal
              options={extractUniqueValues("anno")} // Provide your unique values here
              value={activeFilters["anno"] || ""} // Set the selected value
              onChange={(event, newValue) =>
                handleFilterSelect("anno", newValue)
              } // Update the selected value
              renderInput={(params) => (
                <TextField {...params} label="anno" />
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
            <SearchField
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <MenuWithOptions options={options} />
          </>) : navData === "AmministragionFlussi" ? (
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
                onChange={(event, newValue) => handleFilterSelect("entrata", newValue)} // Update the selected value
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
                onChange={(event, newValue) =>
                  handleFilterSelect("tipo", newValue)
                } // Update the selected value
                renderInput={(params) => (
                  <TextField {...params} label="Tipo" />
                )} // Customize the label
              // sx={{ width: 300 }} // Optional styling
              />
              <Autocomplete
                disablePortal
                options={extractUniqueValues("modalita")} // Provide your unique values here
                value={activeFilters["modalita"] || ""} // Set the selected value
                onChange={(event, newValue) => handleFilterSelect("modalita", newValue)} // Update the selected value
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
                renderInput={(params) => (
                  <TextField {...params} label="Scadenza" />
                )} // Customize the label
              // sx={{ width: 300 }} // Optional styling
              />
              <Autocomplete
                disablePortal
                options={extractUniqueValues("obiettivo")} // Provide your unique values here
                value={activeFilters["obiettivo"] || ""} // Set the selected value
                onChange={(event, newValue) => handleFilterSelect("obiettivo", newValue)} // Update the selected value
                renderInput={(params) => <TextField {...params} label="Obiettivo" />} // Customize the label
              // sx={{ width: 300 }} // Optional styling
              />
              <SearchField
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <MenuWithOptions options={options} />
            </>
          ) : navData === "AmministragionReteizione" ? (
            <>
              <Autocomplete
                disablePortal
                options={extractUniqueValues("obiettivo")} // Provide your unique values here
                value={activeFilters["obiettivo"] || ""} // Set the selected value
                onChange={(event, newValue) => handleFilterSelect("obiettivo", newValue)} // Update the selected value
                renderInput={(params) => <TextField {...params} label="Ricerca libera" />} // Customize the label
              // sx={{ width: 300 }} // Optional styling
              />

              {/* <MenuWithOptions options={options} /> */}
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
              <SearchField
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <MenuWithOptions options={options} />
            </>
          ) : navData === "personale" || navData === "bilancio" ? (
            <></>
          )
        : navData === "documenti" ? (
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
            <SearchField
              value={searchTerm}
              onChange={handleSearchChange}
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
            <SearchField
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <MenuWithOptions options={options} />
          </>
        )}
      {form !== "form1" || (
        <div style={{ marginTop: "5px" }}>
              {(navData === "personale" || navData === "repository" || navData === "leed") && (
            <MenuWithOptions options={options} />
          )}
          </div>
      )
      }
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
  return (
    <Box
      className={
        navData === "personale"||navData==="bilancio"
          ? ""
          : `
        ${
          window.location.pathname === "/vendite/ordini/sub-ordini"
            ? ""
            : `
          ${
            invoice
              ? "invoiceFilter fattura"
              : `invoiceFilter`
          }
          ${navData === "leed" ? "leadInvoiceFilter" : ""}
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
          // sx={{ width: 300 }} // Optional styling
        />
      )}
    </Box>
  );
};
export default SearchTable;
