import React, { useState } from 'react';
import {
    Box,
    TextField,
    MenuItem,
    Typography,
    Alert,
    Grid,
    Paper,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from '../../../component/form/CustomSelect';

// Styled components to match the UI design
const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '4px',
        backgroundColor: '#fff',
        '& fieldset': {
            borderColor: '#e0e0e0',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '8px 14px',
    },
});

const StyledAlert = styled(Alert)({
    backgroundColor: '#f0f9eb',
    color: '#333',
    padding: '8px 16px',
    '& .MuiAlert-icon': {
        display: 'none'
    },
    borderRadius: '4px',
    marginBottom: '16px',
});

const SectionTitle = styled(Typography)({
    fontSize: '14px',
    fontWeight: 500,
    color: '#333',
    marginBottom: '16px',
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

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    return (
        <Box
            sx={{
                p: 3,
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: "#fdfdfd",
                borderRadius: 5,
                border: '1px solid #f2f2f2',
                boxShadow: '0px 0px 5px 0px #fafafa',
                padding: '30px 12px'
            }}
        >
            <Grid container spacing={4}>
                {/* Left Column */}
                <Grid item xs={12} md={4}>
                    <SectionTitle>Stabilimento</SectionTitle>
                    <Box sx={{ mb: 2 }}>
                        <CustomSelect
                            control={control}
                            select
                            fullWidth
                            size="small"
                            name="Categoria mezzo"
                            label="Categoria mezzo"
                            options={selectOptions}
                            // onChange={handleChange('stabilimento')}
                        />
                    </Box>
                    <StyledTextField
                        fullWidth
                        size="small"
                        placeholder="Posizione all'interno dello stabilimento"
                        // value={values.posizione}
                        // onChange={handleChange('posizione')}
                    />

                    <Box sx={{ mt: 3 }}>
                        <SectionTitle>Prezzi</SectionTitle>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <StyledTextField
                                    fullWidth
                                    size="small"
                                    placeholder="Prezzo unitario di acquisto"
                                    // value={values.prezzoAcquisto}
                                    // onChange={handleChange('prezzoAcquisto')}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <StyledTextField
                                    select
                                    fullWidth
                                    size="small"
                                    placeholder="IVA"
                                    // value={values.iva}
                                    // onChange={handleChange('iva')}
                                >
                                    <MenuItem value="22">IVA</MenuItem>
                                </StyledTextField>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} sx={{ mt: 1 }}>
                            <Grid item xs={8}>
                                <StyledTextField
                                    fullWidth
                                    size="small"
                                    placeholder="Prezzo unitario di vendita"
                                    // value={values.prezzoVendita}
                                    // onChange={handleChange('prezzoVendita')}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <StyledTextField
                                    select
                                    fullWidth
                                    size="small"
                                    placeholder="IVA"
                                    // value={values.iva}
                                    // onChange={handleChange('iva')}
                                >
                                    <MenuItem value="22">IVA</MenuItem>
                                </StyledTextField>
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} sx={{ mt: 1 }}>
                            <Grid item xs={8}>
                                <StyledTextField
                                    fullWidth
                                    size="small"
                                    placeholder="Totale valore della giacenza"
                                    // value={values.valoreGiacenza}
                                    // onChange={handleChange('valoreGiacenza')}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <StyledTextField
                                    select
                                    fullWidth
                                    size="small"
                                    placeholder="IVA"
                                    // value={values.iva}
                                    // onChange={handleChange('iva')}
                                >
                                    <MenuItem value="22">IVA</MenuItem>
                                </StyledTextField>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                {/* Middle Column */}
                <Grid item xs={12} md={4}>
                    <SectionTitle>Quantità</SectionTitle>
                    <StyledAlert severity="info">
                        RIORDINO AUTOMATICO: MINIMA GIACENZA XXDD PZ RIORDINA IL 20/11/2024
                    </StyledAlert>

                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                placeholder="Q.ta disponibili"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                placeholder="Q.ta impegnata"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                placeholder="Q.ta in produzione"
                                type="number"
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 3 }}>
                        <SectionTitle>Caratteristiche</SectionTitle>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <StyledTextField
                                    select
                                    fullWidth
                                    size="small"
                                    placeholder="Formato"
                                    // value={values.formato}
                                    // onChange={handleChange('formato')}
                                >
                                    <MenuItem value="formato1">Formato 1</MenuItem>
                                </StyledTextField>
                            </Grid>
                            <Grid item xs={6}>
                                <StyledTextField
                                    select
                                    fullWidth
                                    size="small"
                                    placeholder="Unità di misura"
                                    // value={values.unitaMisura}
                                    // onChange={handleChange('unitaMisura')}
                                >
                                    <MenuItem value="kg">Unità di misura</MenuItem>
                                </StyledTextField>
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 1 }}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                placeholder="Peso per Unità"
                                // value={values.pesoUnita}
                                // onChange={handleChange('pesoUnita')}
                            />
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                placeholder="Peso totale giacenza"
                                // value={values.pesoTotale}
                                // onChange={handleChange('pesoTotale')}
                            />
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                type="text"
                                placeholder="Data di produzione"
                                // value={values.dataProduzione}
                                // onChange={handleChange('dataProduzione')}
                            />
                        </Box>

                        <Box sx={{ mt: 1 }}>
                            <StyledTextField
                                fullWidth
                                size="small"
                                type="text"
                                placeholder="Scadenza"
                                // value={values.scadenza}
                                // onChange={handleChange('scadenza')}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={4}>
                    <SectionTitle>Provenienza</SectionTitle>
                    <Box sx={{ mb: 2 }}>
                        <StyledTextField
                            select
                            fullWidth
                            size="small"
                            placeholder="Fornitore"
                            // value={values.fornitore}
                            // onChange={handleChange('fornitore')}
                        >
                            <MenuItem value="fornitore1">Fornitore</MenuItem>
                        </StyledTextField>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <StyledTextField
                            select
                            fullWidth
                            size="small"
                            placeholder="Provenienza"
                            // value={values.provenienza}
                            // onChange={handleChange('provenienza')}
                        >
                            <MenuItem value="prov1">Provenienza</MenuItem>
                        </StyledTextField>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <StyledTextField
                            select
                            fullWidth
                            size="small"
                            placeholder="Lotto d'ingresso"
                            // value={values.lottoIngresso}
                            // onChange={handleChange('lottoIngresso')}
                        >
                            <MenuItem value="lotto1">Lotto d'ingresso</MenuItem>
                        </StyledTextField>
                    </Box>

                    <StyledTextField
                        fullWidth
                        size="small"
                        type="text"
                        placeholder="Data di produzione"
                        // value={values.dataProduzione}
                        // onChange={handleChange('dataProduzione')}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SubGiacenzeForm;

