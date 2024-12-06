import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../component/form/CustomInput";
import CustomSelect from "../../../component/form/CustomSelect";
import { Box, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Assuming you have a validation schema defined
// import { validationSchema3 } from "../../../../validation/ValidationSchema";

const StyledAlert = styled(Box)({
  backgroundColor: "#f0f9eb",
  color: "#333",
  padding: "8px 16px",
  borderRadius: "4px",
  marginBottom: "16px",
});

const SectionTitle = styled(Box)({
  fontSize: "14px",
  fontWeight: 500,
  color: "#333",
  marginBottom: "16px",
});

const selectOptions = [
  { value: "", label: "Select an option" },
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const SubGiacenzeForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(validationSchema3),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formCard">
      <Box sx={{ p: 3, maxWidth: "1200px", margin: "0 auto" }}>
        <Grid container spacing={2}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <SectionTitle
              style={{ fontSize: "18px", color: "#666666", fontWeight: "700" }}
            >
              Stabilimento
            </SectionTitle>
            <Box sx={{ mb: 2 }}>
              <CustomSelect
                control={control}
                name="Nome dello stabilimento"
                label="Nome dello stabilimento"
                error={errors["Nome dello stabilimento"]?.message}
                options={selectOptions}
              />
            </Box>
            <CustomInput
              control={control}
              name="Posizione all'interno dello stabilimento"
              label="Posizione all'interno dello stabilimento"
              error={errors["Posizione all'interno dello stabilimento"]}
            />

            <Box sx={{ mt: 3 }}>
              <SectionTitle
                style={{
                  fontSize: "18px",
                  color: "#666666",
                  fontWeight: "700",
                }}
              >
                Prezzi
              </SectionTitle>
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <CustomInput
                    control={control}
                    name="Prezzo unitario di acquisto"
                    label="Prezzo unitario di acquisto"
                    error={errors["Prezzo unitario di acquisto"]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomSelect
                    control={control}
                    name="IVA"
                    label="IVA"
                    error={errors.IVA?.message}
                    options={selectOptions}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={8}>
                  <CustomInput
                    control={control}
                    name="Prezzo unitario di vendita"
                    label="Prezzo unitario di vendita"
                    error={errors["Prezzo unitario di vendita"]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomSelect
                    control={control}
                    name="IVA"
                    label="IVA"
                    error={errors.IVA?.message}
                    options={selectOptions}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={8}>
                  <CustomInput
                    control={control}
                    name="Totale valore della giacenza"
                    label="Totale valore della giacenza"
                    error={errors["Totale valore della giacenza"]}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomSelect
                    control={control}
                    name="IVA"
                    label="IVA"
                    error={errors.IVA?.message}
                    options={selectOptions}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Middle Column */}
          <Grid item xs={12} md={4}>
            <SectionTitle
              style={{ fontSize: "18px", color: "#666666", fontWeight: "700" }}
            >
              Quantità
            </SectionTitle>
            <StyledAlert style={{ fontSize: "10px", color: "#666666" }}>
              RIORDINO AUTOMATICO: MINIMA GIACENZA XXDD PZ RIORDINA IL
              20/11/2024
            </StyledAlert>

            <Grid container spacing={1}>
              <Grid item xs={4}>
                <CustomInput
                  control={control}
                  name="Q.ta disponibili"
                  label="Q.ta disponibili"
                  error={errors["Q.ta disponibili"]}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <CustomInput
                  control={control}
                  name="Q.ta impegnata"
                  label="Q.ta impegnata"
                  error={errors["Q.ta impegnata"]}
                  type="number"
                />
              </Grid>
              <Grid item xs={4}>
                <CustomInput
                  control={control}
                  name="Q.ta in produzione"
                  label="Q.ta in produzione"
                  error={errors["Q.ta in produzione"]}
                  type="number"
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }}>
              <SectionTitle
                style={{
                  fontSize: "18px",
                  color: "#666666",
                  fontWeight: "700",
                }}
              >
                Caratteristiche
              </SectionTitle>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <CustomSelect
                    control={control}
                    name="Formato"
                    label="Formato"
                    error={errors.Formato?.message}
                    options={selectOptions}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomSelect
                    control={control}
                    name="Unità di misura"
                    label="Unità di misura"
                    error={errors["Unità di misura"]?.message}
                    options={selectOptions}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 1 }}>
                <CustomInput
                  control={control}
                  name="Peso per Unità"
                  label="Peso per Unità"
                  error={errors["Peso per Unità"]}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <CustomInput
                  control={control}
                  name="Peso totale giacenza"
                  label="Peso totale giacenza"
                  error={errors["Peso totale giacenza"]}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <CustomInput
                  control={control}
                  name="Data di produzione"
                  label="Data di produzione"
                  error={errors["Data di produzione"]}
                />
              </Box>

              <Box sx={{ mt: 1 }}>
                <CustomInput
                  control={control}
                  name="Scadenza"
                  label="Scadenza"
                  error={errors.Scadenza}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <SectionTitle
              style={{ fontSize: "18px", color: "#666666", fontWeight: "700" }}
            >
              Provenienza
            </SectionTitle>
            <Box sx={{ mb: 2 }}>
              <CustomSelect
                control={control}
                name="Fornitore"
                label="Fornitore"
                error={errors.Fornitore?.message}
                options={selectOptions}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <CustomSelect
                control={control}
                name="Provenienza"
                label="Provenienza"
                error={errors.Provenienza?.message}
                options={selectOptions}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <CustomSelect
                control={control}
                name="Lotto d'ingresso"
                label="Lotto d'ingresso"
                error={errors["Lotto d'ingresso"]?.message}
                options={selectOptions}
              />
            </Box>

            <CustomInput
              control={control}
              name="Data di produzione"
              label="Data di produzione"
              error={errors["Data di produzione"]}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default SubGiacenzeForm;
