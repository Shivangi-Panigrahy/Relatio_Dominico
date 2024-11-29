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
      {navData === "personale" ? (
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
      ) : navData === "eventoAllegati" ? (
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
              <TextField {...params} label="Tipo di file" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("recercaLibrera")} // Provide your unique values here
            value={activeFilters["recercaLibrera"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("recercaLibrera", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Recerca librera" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "eventoAllegati" ? (
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
              <TextField {...params} label="Tipo di file" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("recercaLibrera")} // Provide your unique values here
            value={activeFilters["recercaLibrera"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("recercaLibrera", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Recerca librera" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "personale" ? (
        <></>
      ) : navData === "colaboratory" || navData === "candidati" ? (
        <>
          <div style={{ display: "flex", gap: "10px", margin: 0 }}>
            <Autocomplete
              disablePortal
              options={extractUniqueValues("attivo")} // Provide your unique values here
              value={activeFilters["attivo"] || ""} // Set the selected value
              onChange={(event, newValue) =>
                handleFilterSelect("attivo", newValue)
              } // Update the selected value
              renderInput={(params) => <TextField {...params} label="Attivi" />} // Customize the label
              sx={{ width: 300 }} // Optional styling
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
              sx={{ width: 300 }} // Optional styling
            />
            <Autocomplete
              disablePortal
              options={extractUniqueValues("ruolo")} // Provide your unique values here
              value={activeFilters["ruolo"] || ""} // Set the selected value
              onChange={(event, newValue) =>
                handleFilterSelect("ruolo", newValue)
              } // Update the selected value
              renderInput={(params) => <TextField {...params} label="Ruolo" />} // Customize the label
              sx={{ width: 300 }} // Optional styling
            />
          </div>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("cerca")} // Provide your unique values here
            value={activeFilters["cerca"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("cerca", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Cerca" />} // Customize the label
            sx={{ width: 440 }} // Optional styling
          />
        </>
      ) : navData === "turni" ? (
        <>
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
            options={extractUniqueValues("anno")} // Provide your unique values here
            value={activeFilters["anno"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("anno", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Anno" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "progetti" ? (
        <>
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
            options={extractUniqueValues("anno")} // Provide your unique values here
            value={activeFilters["anno"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("anno", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Anno" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("cerca")} // Provide your unique values here
            value={activeFilters["cerca"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("cerca", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Cerca" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "feriePermisse" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("colaboratore")} // Provide your unique values here
            value={activeFilters["colaboratore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("colaboratore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Collaboratore" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
          <Autocomplete
            disablePortal
            options={extractUniqueValues("evento")} // Provide your unique values here
            value={activeFilters["evento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("evento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipo de evento" />
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
          <Autocomplete
            disablePortal
            options={extractUniqueValues("cerca")} // Provide your unique values here
            value={activeFilters["cerca"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("cerca", newValue)
            } // Update the selected value
            renderInput={(params) => <TextField {...params} label="Cerca" />} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "busta" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("anno")} // Provide your unique values here
            value={activeFilters["anno"] || ""} // Set the selected value
            onChange={(event, newValue) => handleFilterSelect("anno", newValue)} // Update the selected value
            renderInput={(params) => <TextField {...params} label="Anno" />} // Customize the label
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
            options={extractUniqueValues("colaboratore")} // Provide your unique values here
            value={activeFilters["colaboratore"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("colaboratore", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Collaboratore" />
            )} // Customize the label
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
          <Autocomplete
            disablePortal
            options={extractUniqueValues("cerca")} // Provide your unique values here
            value={activeFilters["cerca"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("cerca", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Ricerca libera" />
            )} // Customize the label
            // sx={{ width: 300 }} // Optional styling
          />
        </>
      ) : navData === "equipagiamento" ? (
        <>
          <Autocomplete
            disablePortal
            options={extractUniqueValues("tipodocumento")} // Provide your unique values here
            value={activeFilters["tipodocumento"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("tipodocumento", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Tipo documento" />
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
          <Autocomplete
            disablePortal
            options={extractUniqueValues("cerca")} // Provide your unique values here
            value={activeFilters["cerca"] || ""} // Set the selected value
            onChange={(event, newValue) =>
              handleFilterSelect("cerca", newValue)
            } // Update the selected value
            renderInput={(params) => (
              <TextField {...params} label="Ricerca libera" />
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
      )}
      {form !== "form1" || 
        ["equipagiamento", "eventoAllegati"].includes(navData) === false && (
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
        navData === "personale"
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
